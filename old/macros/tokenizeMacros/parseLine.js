// https://nearley.js.org/
// https://github.com/mathiasbynens/luamin
const { Parser } = require('nearley');
const { flattenDeep, pick } = require('lodash');
const { luaGrammar, macroGrammar, genericGrammar } = require('./grammar');

function simplifyTokens(tokens) {
  if (Array.isArray(tokens)) {
    return tokens.map((result) => simplifyTokens(result));
  }

  return pick(tokens, ['type', 'value']);
}

function tryParse(line, grammar, grammarName) {
  let tokens = [];
  let message = '';

  try {
    tokens = new Parser(grammar).feed(line.trim()).results;
  } catch (err) {
    message = err.message; // eslint-disable-line prefer-destructuring
  }
  const parsed = !message && tokens.length > 0;

  return {
    tokens,
    parsed,
    message: message || 'No tokens returned',
    ambiguous: tokens.length > 1,
    grammar: grammarName
  };
}

module.exports = function parseLine(line) {
  let result;

  if (line.startsWith('/run ') || line.startsWith('/script ')) {
    const words = line.split(' ');

    result = tryParse(words.slice(1).join(' '), luaGrammar, 'lua');

    result.tokens.unshift({
      type: 'command',
      value: words[0]
    }, {
      type: 'space',
      value: ' '
    });
  } else {
    result = tryParse(line, macroGrammar, 'macro');
    if (!result.parsed) {
      result = tryParse(line, genericGrammar, 'generic');
    }
  }

  const { ambiguous, tokens } = result;

  return {
    ...result,
    tokens: simplifyTokens(ambiguous ? tokens : flattenDeep(tokens)),
    line
  };
};
