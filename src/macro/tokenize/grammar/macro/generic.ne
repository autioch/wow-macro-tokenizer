@{%
  const lexer = require(__dirname + '/macro/' + 'lexer')
%}

@lexer lexer

MAIN -> CHANNEL | CHAT | CLICK | COMMAND | LUA | TOOLTIP | SERVER

SPACE -> null | %space

ANYTHING -> %linkProfession | %linkSpell | %linkEnchant | %identifier | %numberRange | %numberDecimal | %number | %colon | %comma | %equal | %exclamation | %semicolon | %dash | %modifier | %slash | %bracketSquareClose | %bracketSquareOpen | %space | %unknown | %gameTarget

SPELL -> (MOD SPACE):* (%exclamation):? %identifier (SPACE %spellMode):? (SPACE %spellLevel):? {% (d) => d.filter(i => i !== null) %}
SPELL_LIST_SEMICOLON -> SPELL (SPACE %semicolon SPACE SPELL):*

MOD -> %bracketSquareOpen MOD_OPTION:+ %bracketSquareClose
MOD_OPTION -> %modifier | %slash | %semicolon | %equal | %comma | %colon | %at | %number | %space | %identifier | %gameTarget # TODO More specific

OPTION -> SPELL_LIST_SEMICOLON | MOD

CHANNEL -> %channel %space ANYTHING:*
CHAT -> %chat %space ANYTHING:*
CLICK -> "/click" %space ANYTHING:+
LUA -> ("/run" | "/script" ) %space ANYTHING:*

COMMAND -> %command (%space OPTION):?
TOOLTIP -> %tooltip (%space OPTION):?

SERVER -> %server (%space %identifier):*
