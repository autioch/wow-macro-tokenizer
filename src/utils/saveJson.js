const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const outputRoot = require('./outputRoot');

module.exports = function saveJson(fileContents, fileName) {
  const serialized = JSON.stringify(fileContents, null, '  ');

  return fs.writeFileAsync(path.join(outputRoot, `${fileName}.json`), serialized, 'utf-8');
};
