const { join } = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const outputRoot = require('./outputRoot');

module.exports = function saveFile(fileContents, fileName) {
  return fs.writeFileAsync(join(outputRoot, fileName), fileContents, 'utf8');
};
