const { readFile } = require('../../../utils');
const { join } = require('path');
const qbLog = require('qb-log');

function extractMacros(fileContents) {
  const macros = [];
  let currentMacroLines = [];

  fileContents
    .split('\n')
    .map((line) => line.trim())
    .forEach((line) => {
      if (line === '') {
        macros.push(currentMacroLines);
        currentMacroLines = [];
      } else {
        currentMacroLines.push(line);
      }
    });

  return macros;
}

module.exports = () => readFile(join(__dirname, 'macros.txt'))
  .then(({ fileContents }) => extractMacros(fileContents))
  .then((macros) => macros.map((lines) => ({
    lines
  })))
  .tap((macros) => qbLog.count('raw', macros.length));
