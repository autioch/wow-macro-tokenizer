const { singleRun, readFile, saveJson } = require('../../utils');
const { join } = require('path');
const extractMacros = require('./extractMacros');

module.exports = function custom(macros = []) {
  return readFile(join(__dirname, 'macros.txt'))
    .then(({ fileContents }) => extractMacros(fileContents))
    .then((customMacros) => macros.concat(customMacros))
    .then((allMacros) => saveJson(allMacros, 'custom'));
};

singleRun(module, 'parser');
