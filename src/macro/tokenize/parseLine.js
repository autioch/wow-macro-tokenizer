const { Parser } = require('nearley');
const { flattenDeep, pick } = require('lodash');
const { luaGrammar, macroGrammar, genericGrammar } = require('./grammar');

function simplifyTokens(tokens) {
  if (Array.isArray(tokens)) {
    return tokens.map((result) => simplifyTokens(result));
  }

  return pick(tokens, ['type', 'value']);
}

function tryParse(line, grammar) {
  let tokens = [];
  let message = '';

  try {
    tokens = new Parser(grammar).feed(line.trim()).results;
  } catch (err) {
    message = err.message; // eslint-disable-line prefer-destructuring
  }

  return {
    tokens,
    parsed: !message && tokens.length > 0,
    message: message || 'No tokens returned',
    ambiguous: tokens.length > 1
  };
}

module.exports = function parseLine(line) {
  const isLua = line.startsWith('/run ');
  let result = tryParse(isLua ? line.slice(5) : line, isLua ? luaGrammar : macroGrammar);

  if (!result.parsed) {
    result = tryParse(line, genericGrammar);
  }

  const { ambiguous, tokens } = result;

  return {
    ...result,
    tokens: simplifyTokens(ambiguous ? tokens : flattenDeep(tokens)),
    line
  };
};
