/* eslint no-sync: 0 */
const { join } = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

const parse = require('./parse');

fs
  .readFileAsync(join(__dirname, '..', '..', 'input', 'lines.txt'), 'utf8')
  .then((lines) => {
    const results = lines.trim().split('\n').map((line) => parse(line.trim()));

    fs.writeFileAsync(join(__dirname, '..', '..', 'app', 'src', 'output.json'), JSON.stringify(results, null, '  '), 'utf8');
  });
