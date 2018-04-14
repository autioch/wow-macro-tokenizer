const moo = require('moo');

module.exports = moo.compile({
  command: /^\/[a-zA-Z]+/,
  channel: /^\/[\d]+/,
  tooltip: /^#[a-zA-Z]+/,
  server: /^\.[a-zA-Z]+/,

  /* interpunction */
  comma: ',',
  colon: ';',
  bracketOpen: '[',
  bracketClose: ']',
  equal: '=',
  space: /[ \t]+/,

  /* numbers */
  numberRange: /[0-9]+-[0-9]+/,
  numberDecimal: /[0-9]+.[0-9]+/,
  number: /[0-9]+/,

  /* words */
  // word: /[a-zA-Z '-]+/,
  word: /!?[a-zA-Z'-]+(?: [a-zA-Z'-]+)*/,

  other: /.+/

});
