const moo = require('moo');

module.exports = moo.compile({
  id: {
    match: /[a-zA-Z]+(?:[0-9_a-zA-Z]+)*/,
    keywords: {
      keyword: [
        'and', 'break', 'do', 'else', 'elseif', 'end', 'false', 'for',
        'function', 'goto', 'if', 'in', 'local', 'nil', 'not', 'or',
        'repeat', 'return', 'then', 'true', 'until', 'while'
      ]
    }
  },
  string: /(?:"|')[^"]+(?:"|')/,
  number: /[0-9]+(?:\.[0-9]+)?/,
  binop: ['+', '-', '*', '/', '^', '%', '..', '<', '<=', '>', '>=', '==', '~=', 'and', 'or'],
  unop: ['-', 'not', '#'],
  space: / +/,
  equal: '=',
  other: /.+?/
});
