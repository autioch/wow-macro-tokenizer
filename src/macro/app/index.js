/* eslint-disable max-len */
const Bluebird = require('bluebird');
const { join } = require('path');
const { readJson, saveJson, singleRun } = require('../../utils');

const APP_DATA_PATH = join('..', 'src', 'macro', 'app', 'src', 'data');

const copyJson = (json) => readJson(json).then((contents) => saveJson(contents, join(APP_DATA_PATH, json)));

module.exports = function macroApp() {
  return Bluebird.all(['categories', 'tags', 'tagger'].map(copyJson));
};

singleRun(module, 'categories');
