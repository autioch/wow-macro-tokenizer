@{%
  const lexer = require(__dirname + '/' + 'definition')
%}

@lexer lexer

MAIN -> WHO | SHOWTOOLTIP | RUN | INVITE | CHAT | %linkProffesion | %linkSpell | COMMAND_ANY | WORD

ANYTHING ->  %command | %chat | %tooltip | %server
    | %linkProffesion | %linkSpell
    | %spellLevel | %spellMode | %spellName
    | %word
    | %numberRange | %numberDecimal | %number
    | %at | %colon | %comma | %equal | %exclamation | %semicolon | %separator | %slash
    | %bracketRoundClose | %bracketRoundOpen | %bracketSquareClose | %bracketSquareOpen
    | %space
    | %unknown

SPELL_SUFFIX -> %spellMode | %spellRank
SPELL -> %exclamation? %spell %space? SPELL_SUFFIX?

# MOD__START
MOD_NOMOD -> "nomod" | "nomodifier"
MOD_TARGET_OPTION -> "target" | "focus" | "player" | NICK
MOD_TARGET -> "target=" MOD_TARGET_OPTION | "@" MOD_TARGET_OPTION
MOD_KEYBOARD_OPTION -> "ctrl" | "shift" | "alt"
MOD_KEYBOARD_PREFIX -> "mod:" | "modifier:"
MOD_KEYBOARD -> MOD_KEYBOARD_PREFIX MOD_KEYBOARD_OPTION
MOD_MOUNT -> "flyable" | "noflyable" | "nomounted" | "mounted"
MOD_COMBAT -> "combat" | "nocombat" | "harm" | "noharm" | "dead" | "nodead" | "noexists"
MOD_MOUSE_OPTION -> "1" | "2"
MOD_MOUSE -> "button:" MOD_MOUSE_OPTION
MOD_PET -> "nopet" | "pet" | "pet" COLON NICK
MOD_SPELL -> "nochanneling" | "nochanneling:" SPELL | "nochanneling: " SPELL
MOD_BODY -> MOD_NOMOD | MOD_KEYBOARD | MOD_TARGET | MOD_MOUNT | MOD_MOUSE | MOD_COMBAT | MOD_PET | MOD_SPELL
MOD_BODY_LIST -> MOD_BODY | MOD_BODY_LIST COMMA MOD_BODY
MOD -> _ BRACKET_OPEN MOD_BODY_LIST BRACKET_CLOSE
# MOD__END

WHO_OPTION -> %number | %numberRange | %word  | %space
WHO -> "/who" %space WHO_OPTION:*

SHOWTOOLTIP_OPTION -> MOD:? %space:? %word %semicolon:?
SHOWTOOLTIP -> "#showtooltip" SHOWTOOLTIP_OPTION:*

RUN -> "/run" %space ANYTHING:*

INVITE -> "/inv" "ite"? | %word

CHAT_ID -> %chat | "/p" | "/o" | "/y" | "/yell" | "/w" | "/ra" | "/rw" | "/s" | "/g" | "/r"
CHAT -> CHAT_ID %space ANYTHING:*

USE_ITEM -> NUMBER | SPELL
USE_ITEM_LIST -> %semicolon? MOD:? %space? USE_ITEM
USE -> "/use" USE_ITEM_LIST:*

CAST_OPTION -> MOD:? %space SPELL
CAST -> "/cast" CAST_OPTION:*

EMOTE_ID -> "/facepalm" | "/lol" | "/rofl" | "/tickle" | "/poke" | "/kiss" | "/pity"
EMOTE -> EMOTE_ID %word

# TODO
COMMAND_ANY -> %command ANYTHING:*
WORD -> ANYTHING:*

TARGET_COMMAND_ID -> "/tar" | "/target" | "/targetlasttarget" | "/targetenemy"
TARGET_COMMAND_OPTION -> MOD | SPELL
TARGET_COMMAND_LINE -> TARGET_COMMAND_ID _:? TARGET_COMMAND_OPTION:?
TARGET_SCRIPT_ID -> "/script"
TARGET_SCRIPT_TEXT -> "SetRaidTarget"
TARGET_SCRIPT_OPTIONS -> "party" NUMBER | NICK
TARGET_SCRIPT_LINE -> TARGET_SCRIPT_ID _ TARGET_SCRIPT_TEXT "(\"" TARGET_SCRIPT_OPTIONS "\"" COMMA NUMBER ")" SEMICOLON:?
TARGET_LINE -> TARGET_COMMAND_LINE | TARGET_SCRIPT_LINE

SETTINGS_CONSOLE_ID -> "/console"
SETTINGS_CONSOLE_VALUE -> NUMBER | NUMBER_DECIMAL
SETTINGS_CONSOLE_LINE -> SETTINGS_CONSOLE_ID _ TEXT _ SETTINGS_CONSOLE_VALUE
SETTINGS_SCRIPT_ID -> "/script"
SETTINGS_SCRIPT_SETCVAR -> "SetCVar"
SETTINGS_SCRIPT_VALUE -> NUMBER | NUMBER_DECIMAL
SETTINGS_SCRIPT_LINE -> TARGET_SCRIPT_ID _ SETTINGS_SCRIPT_SETCVAR "(\"" TEXT "\"" COMMA SETTINGS_SCRIPT_VALUE ")"
SETTINGS_LINE -> SETTINGS_CONSOLE_LINE | SETTINGS_SCRIPT_LINE


MISC_COMMAND_ID ->
  "/stopcasting" | "/stopmacro" | "/startattack" | "/macro" | "/cleartarget" | "/afk" |
  "/petfollow" | "/petattack" |
  "/focus" | "/promote" | "/cancelaura" | "/clearfocus" | "/dismount"

MISC_COMMAND_OPTION -> MOD | SPELL
MISC_COMMAND_LINE -> MISC_COMMAND_ID _:? MISC_COMMAND_OPTION:?
MISC_SCRIPT_ID -> "/script"
MISC_SCRIPT_OPTION -> "LeaveParty()" | "CombatLogClearEntries()"
MISC_SCRIPT_LINE -> MISC_SCRIPT_ID _ MISC_SCRIPT_OPTION ";":?
MISC_TEXT -> TEXT | MISC_TEXT _ TEXT
MISC_SERVER_ID -> ".gm" | ".server"
MISC_SERVER -> MISC_SERVER_ID _:? TEXT:?
MISC_LINE -> MISC_COMMAND_LINE | MISC_SCRIPT_LINE | MISC_TEXT | MISC_SERVER

EQUIP_SIMPLE_ID -> "/equip"
EQUIP_SIMPLE_LINE -> EQUIP_SIMPLE_ID _ SPELL
EQUIPSLOT_ID -> "/equipslot"
EQUIPSLOT_ITEM -> SPELL | "item:" NUMBER ":" NUMBER
EQUIPSLOT_LINE -> EQUIPSLOT_ID _ NUMBER _ EQUIPSLOT_ITEM
EQUIP_LINE -> EQUIP_SIMPLE_LINE | EQUIPSLOT_LINE

CASTSEQUENCE_ID -> "/castsequence"
CASTSEQUENCE_OPTION -> SPELL
CASTSEQUENCE_OPTION_LIST -> SPELL | CASTRANDOM_OPTION_LIST COMMA SPELL
CASTSEQUENCE_MOD_OPTION -> "target" | "focus" | NUMBER
CASTSEQUENCE_MOD_OPTION_LIST -> CASTSEQUENCE_MOD_OPTION | CASTSEQUENCE_MOD_OPTION "/" CASTSEQUENCE_MOD_OPTION
CASTSEQUENCE_MOD -> _ "reset=" CASTSEQUENCE_MOD_OPTION_LIST
CASTSEQUENCE_LINE -> CASTSEQUENCE_ID CASTSEQUENCE_MOD:? _ CASTSEQUENCE_OPTION_LIST

CASTRANDOM_OPTION -> SPELL
CASTRANDOM_OPTION_LIST -> SPELL | CASTRANDOM_OPTION_LIST COMMA SPELL
CASTRANDOM_LINE -> "/castrandom" MOD:? _ CASTRANDOM_OPTION_LIST
