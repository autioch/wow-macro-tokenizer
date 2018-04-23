const { Parser } = require('nearley');
const { flattenDeep } = require('lodash');
const grammar = require('./grammar');

function simplifyResults(results) {
  return flattenDeep(results)
    .filter((result) => !!result) // TODO Grammar has some nulls
    .map(({ type, value }) => ({
      type,
      value
    }));
}

module.exports = function parseLine(line) {
  let results = [];
  let parsed = false;
  let message = '';

  const parser = new Parser(grammar);

  try {
    results = parser.feed(line).results; // eslint-disable-line prefer-destructuring
    parsed = true;
  } catch (err) { // eslint-disable-line no-unused-vars
    message = err.message; // eslint-disable-line prefer-destructuring
  }

  const ambiguous = results.length > 1;

  return {
    results: ambiguous ? results : simplifyResults(results),
    parsed,
    message,
    line,
    ambiguous
  };
};
