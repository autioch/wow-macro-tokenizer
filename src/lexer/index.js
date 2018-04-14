/* eslint no-sync: 0 */
const { join } = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const summarize = require('./summarize');

const parse = require('./parse');

fs
  .readFileAsync(join(__dirname, '..', '..', 'input', 'lines.txt'), 'utf8')
  .then((lines) => {
    const results = lines.trim().split('\n').map((line) => parse(line.trim()));
    const summary = summarize(results);

    fs.writeFileAsync(join(__dirname, '..', '..', 'app', 'src', 'data', 'output.json'), JSON.stringify(results, null, '  '), 'utf8');
    fs.writeFileAsync(join(__dirname, '..', '..', 'app', 'src', 'data', 'summary.json'), JSON.stringify(summary, null, '  '), 'utf8');
  });
