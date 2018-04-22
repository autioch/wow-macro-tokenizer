const { findFiles } = require('../utils');
const parseFile = require('./parseFile');
const dedupe = require('./dedupe');
const writeConfig = require('./writeConfig');
const saveJson = require('../utils/saveJson');

module.exports = function cleanupConfig(dir) {
  return findFiles(dir, 'Config.wtf')
    .map((fileName) => parseFile(fileName))
    .then((parsedFiles) => dedupe(parsedFiles))
    .then((config) => writeConfig(config))
    .then((config) => saveJson(config, 'config'));
};
