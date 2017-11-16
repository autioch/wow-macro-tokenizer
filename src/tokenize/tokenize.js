const compileGrammar = require('./compileGrammar');
const grammar = compileGrammar(require('../grammar'));
const nearley = require('nearley');
const { flattenDeep } = require('lodash');

module.exports = function tokenize(line) {
  let results = [];

  try {
    results = new nearley.Parser(grammar).feed(line).results; // eslint-disable-line prefer-destructuring
  } catch (err) {
    // console.log(err.message.split('\n')[2]); // eslint-disable-line no-magic-numbers
  }

  return results.map((result) => flattenDeep(result));
};
