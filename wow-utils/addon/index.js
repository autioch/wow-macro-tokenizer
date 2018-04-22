const { findFiles, saveJson } = require('../utils');
const groupIdentical = require('./groupIdentical');
const parseFile = require('./parseFile');

module.exports = function getAddons(dir) {
  return findFiles(dir, '*.lua')
    .map((fileName) => parseFile(fileName, dir))
    .then((parsedFiles) => groupIdentical(parsedFiles))
    .then((addons) => saveJson(addons, 'addons'));
};
