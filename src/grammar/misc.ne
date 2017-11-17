MISC_COMMAND_ID ->
  "/stopcasting" | "/stopmacro" | "/startattack" | "/macro" | "/cleartarget" | "/afk" |
  "/petfollow" | "/petattack" |
  "/focus" | "/promote" | "/cancelaura" | "/clearfocus" | "/dismount" {% data => ({ type: "command", data}) %}

MISC_COMMAND_OPTION -> MOD | SPELL
MISC_COMMAND_LINE -> MISC_COMMAND_ID _:? MISC_COMMAND_OPTION:?

MISC_SCRIPT_ID -> "/script"
MISC_SCRIPT_OPTION -> "LeaveParty()" | "CombatLogClearEntries()"
MISC_SCRIPT_LINE -> MISC_SCRIPT_ID _ MISC_SCRIPT_OPTION ";":?

MISC_TEXT -> TEXT | MISC_TEXT _ TEXT

MISC_SERVER_ID -> ".gm" | ".server"
MISC_SERVER -> MISC_SERVER_ID _:? TEXT:?

MISC_LINE -> MISC_COMMAND_LINE | MISC_SCRIPT_LINE | MISC_TEXT | MISC_SERVER
