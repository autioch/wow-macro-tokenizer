const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

function parseSettings(fileContents) {
  return fileContents
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .map((line) => {
      const [, key, value] = line.split(' ').map((text) => text.replace(/"/g, ''));

      return {
        key,
        value
      };
    });
}

module.exports = function parseFile(filename) {
  return fs
    .readFileAsync(filename, 'utf8')
    .then((fileContents) => ({
      filename,
      settings: parseSettings(fileContents)
    }));
};
