const moo = require('moo');

module.exports = moo.compile({
  command: /^\/[a-zA-Z]+/,
  channel: /^\/[\d]+/,
  tooltip: '#showtooltip',
  server: /^\.[a-zA-Z]+/,

  space: /[ \t]+/,

  linkProffesion: /.+\|Htrade:.+/,
  linkSpell: /.+\|Hspell:.+/,

  /* interpunction */
  comma: ',',
  semicolon: ';',
  colon: ':',
  squareBracketOpen: '[',
  squareBracketClose: ']',
  roundBracketOpen: '(',
  roundBracketClose: ')',

  at: '@',
  equal: '=',
  exclamation: '!',

  // separator: '|',
  // slash: '/',
  // plus: '+',
  // hash: '#',

  /* words */
  word: /[a-zA-Z'-]+/,

  // word: /!?[a-zA-Z'-]+(?: [a-zA-Z'-]+)*/,
  // spellRank: /\(Rank \d\d?\)/,
  // spellMode: ['(Shapeshift)', '(Bear)', '(Cat)', '(Demon)', '(Feral)', '(Racial)'],

  /* numbers */
  numberRange: /[0-9]+-[0-9]+/,
  numberDecimal: /[0-9]+\.[0-9]+/,
  number: /[0-9]+/,

  other: /.+?/

});
