const moo = require('moo');

module.exports = moo.compile({
  string: {
    match: /[a-zA-Z]+(?:[0-9_a-zA-Z]+)*/,
    keywords: {
      keyword: [
        'and', 'break', 'do', 'else', 'elseif', 'end', 'false', 'for',
        'function', 'goto', 'if', 'in', 'local', 'nil', 'not', 'or',
        'repeat', 'return', 'then', 'true', 'until', 'while'
      ]
    }
  },
  space: / +/,
  other: /.+?/
});
