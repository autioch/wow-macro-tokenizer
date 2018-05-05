@{%
  const lexer = require(__dirname + '/macro/' + 'lexer')
%}

@lexer lexer

MAIN -> ACTION_BAR | CANCEL_AURA | CAST | CAST_RANDOM | CAST_SEQUENCE | CONSOLE | DISMOUNT | EMOTE | EQUIP_SLOT | TARGET | TOOLTIP | WHO | USE | USE_TALENTS

SPACE -> null | %space

SPELL -> (MOD SPACE):* (%exclamation):? %identifier (SPACE %spellMode):? (SPACE %spellLevel):? {% (d) => d.filter(i => i !== null) %}
SPELL_LIST_SEMICOLON -> SPELL (SPACE %semicolon SPACE SPELL):*
SPELL_LIST_COMMA -> SPELL (SPACE %comma SPACE SPELL):*

MOD -> %bracketSquareOpen MOD_OPTION:* %bracketSquareClose
MOD_OPTION -> %modifier | %slash | %semicolon | %equal | %comma | %colon | %at | %number | %space | %identifier | %target | %gameTarget # TODO More specific

FULL_ID -> %identifier ( "_" %identifier):* {% (d) => ({ type: 'identifier', value: d.join('') }) %}

ACTION_BAR -> "/changeactionbar" %space %number
CANCEL_AURA -> "/cancelaura" %space SPELL_LIST_SEMICOLON
CAST -> "/cast" %space SPELL_LIST_SEMICOLON
CAST_RANDOM -> "/castrandom" %space SPELL_LIST_COMMA
# CAST_SEQUENCE_SPELL -> %identifier (SPACE %spellMode):? (SPACE %spellLevel):? {% (d) => d.filter(i => i !== null) %}
# CAST_SEQUENCE -> "/castsequence" %space (MOD_OPTION:* %space):? CAST_SEQUENCE_SPELL (SPACE %comma SPACE CAST_SEQUENCE_SPELL):*
CAST_SEQUENCE_MOD -> MOD_OPTION | %bracketSquareOpen |%bracketSquareClose
CAST_SEQUENCE -> "/castsequence" %space (CAST_SEQUENCE_MOD:* %space):? %identifier (SPACE %comma SPACE %identifier)
CONSOLE -> "/console" %space FULL_ID %space ( %numberDecimal | %number )
DISMOUNT -> "/dismount" (%space MOD):?
EMOTE -> %emote (%space %identifier):?
EQUIP_SLOT -> "/equipslot" %space (MOD:+ %space):? %number %space (%identifier | %linkItem)
TARGET -> %target (MOD | MOD_OPTION):*
TOOLTIP -> %tooltip (%space SPELL_LIST_SEMICOLON):?
WHO -> "/who" %space (%number | %numberRange | %identifier | %space):*
USE_OPTION -> (MOD:+ %space):* %number | SPELL
USE -> "/use" %space USE_OPTION ( SPACE %semicolon SPACE USE_OPTION ):*
USE_TALENTS -> "/usetalents" %space %number
