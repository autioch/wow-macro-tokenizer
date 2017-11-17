const lines = require('../../input/lines.json');
const saveLines = require('./saveLines');
const tokenize = require('./tokenize');

module.exports = function tokenizeList(macroLines) {
  const parsed = [];
  const failed = [];
  const ambiguous = [];

  macroLines.forEach((line) => {
    const results = tokenize(line);

    (results.length ? results.length > 1 ? ambiguous : parsed : failed).push({ // eslint-disable-line no-nested-ternary
      line,
      results
    });
  });

  return {
    failed,
    parsed,
    ambiguous
  };
};

if (require.main === module) {
  const { failed, parsed, ambiguous } = module.exports(lines);

  console.log('Failed', failed.length, 'Parsed', parsed.length, 'Ambiguous', ambiguous.length);

  saveLines(ambiguous, 'ambiguous');
  saveLines(failed, 'failed');
  saveLines(parsed, 'parsed');
}
