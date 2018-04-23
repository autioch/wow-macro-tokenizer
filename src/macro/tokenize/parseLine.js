const { Parser } = require('nearley');
const { flattenDeep } = require('lodash');
const grammar = require('./grammar');

function simplifyTokens(tokens) {
  if (Array.isArray(tokens)) {
    return tokens
      .filter((result) => !!result) // TODO Grammar has some nulls
      .map((result) => simplifyTokens(result));
  }

  return {
    type: tokens.type,
    value: tokens.value
  };
}

module.exports = function parseLine(line) {
  let tokens = [];
  let parsed = false;
  let message = '';

  const parser = new Parser(grammar);

  try {
    tokens = parser.feed(line).results; // eslint-disable-line prefer-destructuring
    parsed = true;
  } catch (err) { // eslint-disable-line no-unused-vars
    message = err.message; // eslint-disable-line prefer-destructuring
  }

  const ambiguous = tokens.length > 1;

  return {
    tokens: simplifyTokens(ambiguous ? tokens : flattenDeep(tokens)),
    parsed,
    message,
    line,
    ambiguous
  };
};
