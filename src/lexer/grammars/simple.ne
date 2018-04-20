@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

@lexer lexer

MAIN -> TOOLTIP | WHO | CONSOLE_OPTION | CLICK
 | CHANNEL | CHAT | RUN | ADDON
 | SPELL_ONLY | MOD_ONLY | TAR | FOCUS
 | CANCEL_AURA | CAST_RANDOM | CAST_SEQUENCE |  CAST | USE | EQUIP | EQUIP_SLOT

SPACE -> null | %space
SPELL -> %spellName (SPACE %spellMode):* (SPACE %spellLevel):*
SPELL_NO_CAST -> ( MOD:* SPACE | null ) ( %exclamation | null)  SPELL
RULE_LIST -> SPELL_NO_CAST (SPACE %semicolon SPACE SPELL_NO_CAST):*
MOD -> %bracketSquareOpen MOD_OPTION:* %bracketSquareClose
MOD_OPTION -> %modifier | %slash | %semicolon | %equal | %comma | %colon | %at | %number | %space | %spellName
ANYTHING -> %linkProffesion | %linkSpell | %spellName | %numberRange | %numberDecimal | %number | %at | %colon | %comma | %equal | %exclamation | %semicolon | %dash | %modifier | %slash | %bracketSquareClose | %bracketSquareOpen | %space | %unknown
TOOLTIP_SPELL -> ( MOD:* SPACE | null ) SPELL
TOOLTIP_OPTION -> TOOLTIP_SPELL (SPACE %semicolon SPACE TOOLTIP_SPELL):*
TOOLTIP -> %tooltip %space TOOLTIP_OPTION
CHANNEL -> %channel %space ANYTHING:*
CHAT -> %chat %space ANYTHING:*
RUN -> "/run" %space ANYTHING:*
RUN -> "/script" %space ANYTHING:*
CAST -> "/cast" %space RULE_LIST
CANCEL_AURA -> "/cancelaura" %space RULE_LIST
WHO_OPTION -> %number | %numberRange | %spellName | %space
WHO -> "/who" %space WHO_OPTION:*
CAST_RANDOM_OPTION -> SPELL | CAST_RANDOM_OPTION SPACE %comma SPACE SPELL
CAST_RANDOM_MOD -> ( %space MOD %space | %space )
CAST_RANDOM -> "/castrandom" CAST_RANDOM_MOD CAST_RANDOM_OPTION:*
CAST_SEQUENCE_MOD -> ( %space MOD_OPTION:* %space | %space )
CAST_SEQUENCE -> "/castsequence" CAST_SEQUENCE_MOD CAST_RANDOM_OPTION
USE_OPTION -> %number | RULE_LIST | MOD %space %number
USE_OPTION_LIST -> USE_OPTION ( SPACE %semicolon SPACE ):*
USE -> "/use" %space USE_OPTION_LIST
FOCUS -> "/focus" %space RULE_LIST
CONSOLE_OPTION -> "/console" %space %spellName %space ( %numberDecimal | %number )
SPELL_ONLY -> ( %server | "/equip" | "/promote" | "/inv" | "/invite" | "/follow" | "/tar" | "/target") %space %spellName
MOD_ONLY -> ( "/dismount" | "/clearfocus" | "/targetenemy" | "/stopmacro") %space MOD:*
ADDON ->  %command %space %spellName
CLLICK -> "/click" %space ANYTHING:*
EQUIP_SLOT -> "/equipslot" %space %number %space (%spellName | %linkItem)
