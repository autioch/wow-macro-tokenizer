@{%
  const lexer = require(__dirname + '/macro/' + 'lexer')
%}

@lexer lexer

MAIN -> CANCEL_AURA | CAST | CAST_RANDOM | CAST_SEQUENCE | CONSOLE | DISMOUNT | EMOTE | EQUIP_SLOT | TARGET | TOOLTIP | WHO | USE

SPACE -> null | %space

SPELL -> (MOD SPACE):* (%exclamation):? %identifier (SPACE %spellMode):? (SPACE %spellLevel):? {% (d) => d.filter(i => i !== null) %}
SPELL_LIST_SEMICOLON -> SPELL (SPACE %semicolon SPACE SPELL):*
SPELL_LIST_COMMA -> SPELL (SPACE %comma SPACE SPELL):*

MOD -> %bracketSquareOpen MOD_OPTION:+ %bracketSquareClose
MOD_OPTION -> %modifier | %slash | %semicolon | %equal | %comma | %colon | %at | %number | %space | %identifier | %target | %gameTarget # TODO More specific

CANCEL_AURA -> "/cancelaura" %space SPELL_LIST_SEMICOLON
CAST -> "/cast" %space SPELL_LIST_SEMICOLON
CAST_RANDOM -> "/castrandom" %space SPELL_LIST_COMMA
CAST_SEQUENCE -> "/castsequence" %space (MOD_OPTION:* %space):? %identifier (SPACE %comma SPACE %identifier)
CONSOLE -> "/console" %space %identifier %space ( %numberDecimal | %number )
DISMOUNT -> "/dismount" (%space MOD):?
EMOTE -> %emote (%space %identifier):?
EQUIP_SLOT -> "/equipslot" %space %number %space (%identifier | %linkItem)
TARGET -> %target (MOD | MOD_OPTION):*
TOOLTIP -> %tooltip (%space SPELL_LIST_SEMICOLON):?
WHO -> "/who" %space (%number | %numberRange | %identifier | %space):*
USE_OPTION -> (MOD:+ %space):* %number | SPELL
USE -> "/use" %space USE_OPTION ( SPACE %semicolon SPACE USE_OPTION ):*
