const compileGrammar = require('./compileGrammar');
const grammar = compileGrammar(require('./grammar'));
const nearley = require('nearley');

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

module.exports = function parse(line) {
  let results = [];

  const parser = new nearley.Parser(grammar);

  try {
    results = parser.feed(line).results; // eslint-disable-line prefer-destructuring
  } catch (err) { // eslint-disable-line no-unused-vars
    console.log(err.message); // eslint-disable-line no-magic-numbers
  }

  return {
    line,

    // results,
    results: smartFlatten(results)
  };
};
