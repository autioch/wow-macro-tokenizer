/* eslint no-undefined: 0 */
const { findFiles, saveJson, readFile } = require('utils');

const MACRO_END = 'END';
const VER_3_PREFIX = 'VER 3';
const HEADER_VER_1 = /MACRO (.+) "(.+)" (.+)/;
const HEADER_VER_3 = /VER 3 (.+) "(.+)" (.+)/;
const PREFIXES = ['!', '@', '#', '$', '%', '^', '&', '*', '_', 'x'];

function parseLabel(rawLabel) {
  if (!rawLabel || rawLabel.length < 2) {
    return [undefined, rawLabel];
  }

  if (PREFIXES.includes(rawLabel[0])) {
    return [rawLabel[0], rawLabel.slice(1)];
  }

  return [undefined, rawLabel];
}

function parseHeader(headerLine) {
  if (!headerLine) {
    return ['?', '?', '?'];
  }

  const details = headerLine.match(headerLine.startsWith(VER_3_PREFIX) ? HEADER_VER_3 : HEADER_VER_1);

  if (!details || details.length < 3) {
    return ['?', '?', '?'];
  }

  return details.map((text) => text.replace(/"/g, ''));
}

function parseMacro(lines) {
  const [, id, rawLabel, icon] = parseHeader(lines[0]);
  const [prefix, label] = parseLabel(rawLabel);

  return {
    id,
    prefix,
    label,
    icon,
    lines: lines.slice(1, -1) // remove header line and "END"
  };
}

function parseFile({ fileName, fileContents }) {
  const macros = [];
  let currentMacroLines = [];

  fileContents.split('\n')
    .map((line) => line.trim())
    .forEach((line) => {
      currentMacroLines.push(line);
      if (line === MACRO_END) {
        macros.push(currentMacroLines);
        currentMacroLines = [];
      }
    });

  return macros.map((macroLines) => ({
    fileName,
    ...parseMacro(macroLines)
  }));
}

module.exports = function reader(macroDir) {
  return findFiles(macroDir, 'macros-cache.txt')
    .map((fileName) => readFile(fileName))
    .map((fileInfo) => parseFile(fileInfo))
    .reduce((arr, macros) => arr.concat(macros), [])
    .then((parsedFiles) => saveJson(parsedFiles, 'readMacros'));
};
