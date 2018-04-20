@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

@lexer lexer


MAIN ->ANYTHING:* # TOOLTIP # | COMMAND | CHAT | SERVER

SPACE -> null | %space

# MOD -> %bracketSquareOpen MOD_OPTION:* %bracketSquareClose
# MOD_OPTION -> %modifier | %slash | %semicolon | %equal | %comma | %colon | %at

ANYTHING -> %linkProffesion | %linkSpell
    # | %spellLevel | %spellMode | %spellName
    | %word
    | %numberRange | %numberDecimal | %number
    | %at | %colon | %comma | %equal | %exclamation | %semicolon | %dash
    # | %separator
    | %slash
    # | %bracketRoundClose | %bracketRoundOpen
    | %bracketSquareClose | %bracketSquareOpen
    | %space
    # | %unknown

# ITEM -> MOD? %word
# ITEM_LIST -> ITEM | ITEM_LIST SPACE %colon SPACE ITEM

# COMMAND -> %command
# CHAT -> %chat ANYTHING:*
TOOLTIP -> %tooltip ANYTHING:* # SPACE ITEM_LIST
# SERVER -> %server ANYTHING:*
