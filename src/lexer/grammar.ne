@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

# Pass your lexer object using the @lexer option:
@lexer lexer


MAIN -> LINE

LINE -> WORD:*

WORD ->  %command | %tooltip | %channel | %server | %comma | %colon | %bracketOpen | %bracketClose | %equal | %space | %numberRange | %numberDecimal | %number | %word | %other
