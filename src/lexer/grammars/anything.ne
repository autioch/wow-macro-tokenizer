@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

@lexer lexer

MAIN -> ANYTHING:*

ANYTHING ->  %command | %chat | %tooltip | %server
    | %linkProffesion | %linkSpell
    | %spellLevel | %spellMode | %spellName
    | %word
    | %numberRange | %numberDecimal | %number
    | %at | %colon | %comma | %equal | %exclamation | %semicolon | %separator | %slash
    | %bracketRoundClose | %bracketRoundOpen | %bracketSquareClose | %bracketSquareOpen
    | %space
    | %unknown
