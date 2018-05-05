const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const { join } = require('path');

module.exports = function readFile(...fileNameParts) {
  const fileName = join(...fileNameParts);

  return fs
    .readFileAsync(fileName, 'utf8')
    .then((fileContents) => ({
      fileName,
      fileContents
    }));
};
