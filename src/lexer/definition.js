const moo = require('moo');

module.exports = moo.compile({
  command: /^\/[a-zA-Z]+/,
  chat: /^\/[\d]+/,
  tooltip: '#showtooltip',
  server: /^\.[a-zA-Z]+/,

  /* customs */
  linkProffesion: /\|.+\|Htrade:.+\|h\|r/,
  linkSpell: /\|.+\|Hspell:.+\|h\|r/,

  spellLevel: /\(Rank \d+\)/,
  spellMode: ['(Shapeshift)', '(Bear)', '(Cat)', '(Demon)', '(Feral)', '(Racial)'],
  spellName: /[a-zA-Z]+(?:(?: |'|-)[a-zA-Z]+)*/,

  /* words */
  word: /[a-zA-Z]+/,

  /* numbers */
  numberRange: /[0-9]+-[0-9]+/,
  numberDecimal: /[0-9]+\.[0-9]+/,
  number: /[0-9]+/,

  /* interpunction */
  at: '@',
  colon: ':',
  comma: ',',
  equal: '=',
  exclamation: '!',
  bracketRoundClose: ')',
  bracketRoundOpen: '(',
  bracketSquareClose: ']',
  bracketSquareOpen: '[',
  semicolon: ';',
  separator: '|',
  slash: '/',

  space: /[ \t]+/,

  unknown: /.+?/
});
