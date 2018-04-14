@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

# Pass your lexer object using the @lexer option:
@lexer lexer


MAIN -> LINE

LINE -> WORD:*

WORD ->  %command | %channel | %tooltip | %server
      | %space
      | %linkProffesion | %linkSpell
      | %comma | %semicolon | %colon
      | %squareBracketOpen | %squareBracketClose
      | %roundBracketOpen | %roundBracketClose
      | %at | %equal | %exclamation
      # | %separator | %slash  | %plus |  %hash

      | %word
      # | %spellMode | %spellRank

      | %numberRange | %numberDecimal | %number
      | %other
