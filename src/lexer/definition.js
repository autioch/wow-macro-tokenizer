const moo = require('moo');

module.exports = moo.compile({
  command: /^\/[a-zA-Z]+/,
  channel: /^\/[\d]+/,
  tooltip: '#showtooltip',
  server: /^\.[a-zA-Z]+/,

  /* customs */
  linkProffesion: /.+\|Htrade:.+/,
  linkSpell: /.+\|Hspell:.+/,
  spellRank: /\(Rank \d\d?\)/,
  spellMode: ['(Shapeshift)', '(Bear)', '(Cat)', '(Demon)', '(Feral)', '(Racial)'],

  /* words */
  word: /[a-zA-Z]+/,
  spell: /[a-zA-Z](['-: ][a-zA-Z])+/,

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
