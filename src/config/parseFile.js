const { readFile } = require('../utils');

function parseSettings(fileContents) {
  return fileContents
    .trim()
    .split('\n')
    .map((line) => line.trim().split(' ').map((text) => text.replace(/"/g, '')))
    .map(([, key, value]) => ({
      key,
      value
    }));
}

module.exports = function parseFile(fileName) {
  return readFile(fileName).then((fileContents) => ({
    fileName,
    settings: parseSettings(fileContents)
  }));
};
