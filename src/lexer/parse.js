const compileGrammar = require('./compileGrammar');
const grammar = compileGrammar(require('./grammar'));
const nearley = require('nearley');
const qbLog = require('qb-log')('simple');
const { flattenDeep } = require('lodash');

function isSingleElementArray(obj) {
  return Array.isArray(obj) && obj.length === 1;
}

function smartFlatten(obj) {
  if (isSingleElementArray(obj)) {
    return smartFlatten(obj[0]);
  }

  if (Array.isArray(obj)) {
    return obj.map((el) => smartFlatten(el));
  }

  return obj;
}

module.exports = function parse(line, index) {
  let results = [];
  let parsed = false;
  let message = '';

  const parser = new nearley.Parser(grammar);

  try {
    results = parser.feed(line).results; // eslint-disable-line prefer-destructuring
    parsed = true;
  } catch (err) { // eslint-disable-line no-unused-vars
    qbLog.warn(index, line);
    message = err.message; // eslint-disable-line prefer-destructuring
    qbLog.warn(err.message); // eslint-disable-line no-magic-numbers
  }

  const ambiguous = results.length > 1;

  return {
    parsed,
    line,
    message,
    ambiguous,

    // results,
    results: results.map((result) => flattenDeep(result))
  };
};
