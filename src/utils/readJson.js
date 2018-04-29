const { join } = require('path');
const readFile = require('./readFile');
const outputRoot = require('./outputRoot');

module.exports = function readJson(fileName) {
  return readFile(join(outputRoot, `${fileName}.json`)).then(({ fileContents }) => JSON.parse(fileContents));
};
