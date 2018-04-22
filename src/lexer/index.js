/* eslint no-sync: 0 */
const { join } = require('path');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));
const summarize = require('./summarize');
const qbLog = require('qb-log');

const parse = require('./parse');

const OUTPUT_PATH = join(__dirname, '..', '..', 'app', 'src', 'data');

fs
  .readFileAsync(join(__dirname, '..', '..', 'input', 'lines.txt'), 'utf8')
  .then((lines) => {
    const results = lines.trim().split('\n').map((line, index) => parse(line.trim(), index + 1));
    const summary = summarize(results);
    const ambCount = results.filter((result) => result.ambiguous).length;

    if (ambCount > 0) {
      qbLog.error(ambCount, 'ambiguous parses');
    } else {
      qbLog.info('no ambiguous parses');
    }

    qbLog.info(results.filter((result) => result.parsed).length, '/', results.length);

    fs.writeFileAsync(join(OUTPUT_PATH, 'output.json'), JSON.stringify(results, null, '  '), 'utf8');
    fs.writeFileAsync(join(OUTPUT_PATH, 'summary.json'), JSON.stringify(summary, null, '  '), 'utf8');
  });
