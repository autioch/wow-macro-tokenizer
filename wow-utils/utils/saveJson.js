const path = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

const OUTPUT_FOLDER = path.join(__dirname, '..', '..', 'output');

module.exports = function saveJson(fileContents, fileName) {
  const serialized = JSON.stringify(fileContents, null, '  ');

  return fs.writeFileAsync(path.join(OUTPUT_FOLDER, `${fileName}.json`), serialized, 'utf-8');
};
