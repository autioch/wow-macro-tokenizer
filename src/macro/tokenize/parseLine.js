const { Parser } = require('nearley');
const { flattenDeep } = require('lodash');
const grammar = require('./grammar');

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
    results: ambiguous ? results : flattenDeep(results),
    parsed,
    message,
    line,
    ambiguous
  };
};
