const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

module.exports = function readFile(fileName) {
  return fs
    .readFileAsync(fileName, 'utf8')
    .then((fileContents) => ({
      fileName,
      fileContents
    }));
};
