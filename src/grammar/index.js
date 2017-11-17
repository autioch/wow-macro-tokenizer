/* eslint no-sync: 0 */
const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');

const files = readdirSync(__dirname).filter((file) => file.endsWith('.ne'));

const lines = [];

files
  .reverse() // _index.ne must be first apparently...
  .forEach((file) => {
    const fileLines = readFileSync(join(__dirname, file), 'utf8');

    // console.log(file, fileLines.length);
    lines.push(fileLines.split('\n').filter((fileLine) => fileLine.length > 0).join('\n'));
  });

module.exports = lines.join('');
