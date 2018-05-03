const { saveFile, readFile, saveJson, findFiles, setDict } = require('utils');
const { uniq } = require('lodash');

function parseFile({ fileContents, fileName }) {
  return {
    fileName,
    settings: fileContents.trim().split('\n')
      .map((line) => line.trim().split(' ').map((text) => text.replace(/"/g, '')))
      .map(([, key, value]) => ({
        key,
        value
      }))
  };
}

function groupByKey(parsedFiles) {
  const settingNames = [];
  const settings = {};

  parsedFiles.forEach((parsedFile) => {
    parsedFile.settings.forEach(({ key, value }) => {
      settingNames.push(key);
      setDict(settings, key, []).push(value);
    });
  });

  return uniq(settingNames).map((key) => ({
    key,
    values: uniq(settings[key]).sort()
  }));
}

function writeConfig(config) {
  const lines = [];

  config.forEach((setting) => {
    const { key, values } = setting;

    if (values.length > 1) {
      lines.push('', ...values.map((value) => `SET ${key} "${value}"    ----------------------------------------`), '');
    } else {
      lines.push(`SET ${key} "${values[0]}"`);
    }
  });

  return saveFile(lines.join('\n'), 'Config.wtf').then(() => config);
}

module.exports = function cleanupConfig(dir) {
  return findFiles(dir, 'Config.wtf')
    .map((fileName) => readFile(fileName))
    .map((fileInfo) => parseFile(fileInfo))
    .then((parsedFiles) => groupByKey(parsedFiles))
    .then((config) => writeConfig(config))
    .then((config) => saveJson(config, 'config'));
};
