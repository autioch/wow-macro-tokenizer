const { findFiles, saveJson } = require('../utils');
const mergeConfig = require('./mergeConfig');
const parseFile = require('./parseFile');

module.exports = function getAddons(dir) {
  return findFiles(dir, '*.lua')
    .map((fileName) => parseFile(fileName, dir))
    .then((parsedFiles) => mergeConfig(parsedFiles))
    .then((addons) => saveJson(addons, 'addons'));
};
