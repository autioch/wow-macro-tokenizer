const { findFiles, saveJson } = require('../../utils');
const parseFile = require('./parseFile');

const MACRO_FILE = 'macros-cache.txt';

module.exports = function reader(macroDir) {
  return findFiles(macroDir, MACRO_FILE)
    .map((fileName) => parseFile(fileName))
    .tap((parsedFiles) => saveJson(parsedFiles, 'reader'));
};
