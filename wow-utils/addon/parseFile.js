const crypto = require('crypto'); // eslint-disable-line no-shadow
const path = require('path');
const { readFile } = require('../utils');

const GLOB_PATH_SEP = '/';

module.exports = function parseFile(fileName, dir) {
  return readFile(fileName)
    .then(({ fileContents }) => ({
      hash: crypto.createHash('md5').update(fileContents).digest('hex'),
      filePath: path.relative(dir, fileName),
      fileSize: fileContents.length,
      fileName: fileName.split(GLOB_PATH_SEP).pop().replace('.lua', '')
    }));
};
