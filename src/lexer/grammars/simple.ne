@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

@lexer lexer


MAIN -> COMMAND | CHAT | TOOLTIP | SERVER

SPACE -> null | %space

MOD -> %bracketRoundOpen MOD_OPTION:* %bracketRoundClose
MOD_OPTION -> %word | %number | %at | %colon | %comma | %equal | %exclamation | %semicolon | %separator | %slash

ANYTHING -> %linkProffesion | %linkSpell
    | %spellLevel | %spellMode | %spellName
    | %word
    | %numberRange | %numberDecimal | %number
    | %at | %colon | %comma | %equal | %exclamation | %semicolon | %separator | %slash
    | %bracketRoundClose | %bracketRoundOpen | %bracketSquareClose | %bracketSquareOpen
    | %space
    | %unknown


COMMAND -> %command ANYTHING:*
CHAT -> %chat ANYTHING:*
TOOLTIP -> %tooltip ANYTHING:*
SERVER -> %server ANYTHING:*
