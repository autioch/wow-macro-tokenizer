const { readFile, saveJson } = require('../../../utils');
const { join } = require('path');
const addon = require('./addon');

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

  return macros.map((lines) => ({
    lines
  }));
}

module.exports = function customMacros() {
  return addon()
    .then((addonMacros) => readFile(join(__dirname, 'macros.txt'))
      .then(({ fileContents }) => extractMacros(fileContents))
      .then((macros) => addonMacros.concat(macros))
      .tap((allMacros) => saveJson(allMacros, 'customMacros')));
};
