const crypto = require('crypto'); // eslint-disable-line no-shadow
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const path = require('path');

const GLOB_PATH_SEP = '/';

function extractFileName(filePath) {
  const parts = filePath.split(GLOB_PATH_SEP).slice(0);

  return parts.pop().replace('.lua', '');
}

function createHash(fileContents) {
  return crypto.createHash('md5').update(fileContents).digest('hex');
}

module.exports = function parseFile(filePath, dir) {
  return fs
    .readFileAsync(filePath, 'utf8')
    .then((fileContents) => ({
      hash: createHash(fileContents),
      filePath: path.relative(dir, filePath),
      fileSize: fileContents.length,
      fileName: extractFileName(filePath)
    }));
};
