@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

@lexer lexer

MAIN -> CHANNEL | CHAT | CANCEL_AURA | CAST | CAST_RANDOM | CAST_SEQUENCE | COMMAND_ONLY | CLICK | CONSOLE
  | EMOTE | EQUIP_SLOT | FOCUS | MOD_ONLY | RUN | SPELL_ONLY | TOOLTIP | WHO | USE

SPACE -> null | %space
ANYTHING -> %linkProfession | %linkSpell | %linkEnchant | %spellName | %numberRange | %numberDecimal | %number | %colon | %comma | %equal | %exclamation | %semicolon | %dash | %modifier | %slash | %bracketSquareClose | %bracketSquareOpen | %space | %unknown

SPELL -> (MOD:+ %space):* (%exclamation):? %spellName (SPACE %spellMode):? (SPACE %spellLevel):? {% (d) => d.filter(i => i !== null) %}
SPELL_LIST -> SPELL (SPACE %semicolon SPACE SPELL):*

MOD -> %bracketSquareOpen MOD_OPTION:+ %bracketSquareClose
MOD_OPTION -> %modifier | %slash | %semicolon | %equal | %comma | %colon | %at | %number | %space | %spellName  # TODO More specific

CHANNEL -> %channel %space ANYTHING:*
CHAT -> %chat %space ANYTHING:*
CANCEL_AURA -> "/cancelaura" %space SPELL_LIST
CAST -> "/cast" %space SPELL_LIST
CAST_RANDOM -> "/castrandom" %space SPELL (SPACE %comma SPACE SPELL):*
CAST_SEQUENCE -> "/castsequence" %space (MOD_OPTION:* %space):? %spellName (SPACE %comma SPACE %spellName)
COMMAND_ONLY -> "/macro" | "/startattack" | "/petfollow" | "/cleartarget" | "/afk" | "/stopcasting"
CLICK -> "/click" %space ANYTHING:*
CONSOLE -> "/console" %space %spellName %space ( %numberDecimal | %number )
EMOTE -> %emote (%space %spellName):?
EQUIP_SLOT -> "/equipslot" %space %number %space (%spellName | %linkItem)
FOCUS -> "/focus" (%space SPELL_LIST):?
MOD_ONLY -> ( "/dismount" | "/clearfocus" | "/targetenemy" | "/stopmacro") (%space MOD):?
RUN -> ("/run" | "/script" ) %space ANYTHING:*
SPELL_ONLY -> ( "/equip" | "/promote" | "/inv" | "/invite" | "/follow" | "/tar" | "/target" | %server) %space %spellName
TOOLTIP -> %tooltip (%space SPELL_LIST):*
WHO -> "/who" %space (%number | %numberRange | %spellName | %space):*

USE_OPTION -> (MOD:+ %space):* %number | SPELL
USE -> "/use" %space USE_OPTION ( SPACE %semicolon SPACE  USE_OPTION ):*
