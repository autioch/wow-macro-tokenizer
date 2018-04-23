const { join } = require('path');
const readFile = require('./readFile');

const OUTPUT_FOLDER = join(__dirname, '..', '..', 'output');

module.exports = function readJson(fileName) {
  return readFile(join(OUTPUT_FOLDER, `${fileName}.json`)).then(({ fileContents }) => JSON.parse(fileContents));
};
