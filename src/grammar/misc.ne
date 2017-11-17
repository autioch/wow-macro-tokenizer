MISC_ID -> "/stopcasting" | "/stopmacro" | "/startattack" | "/macro" | "/cleartarget" | "/afk" | "/petfollow"
MISC_ID_MOD -> "/petattack" | "/focus" | "/promote" | "/cancelaura" | "/clearfocus"

MISC_LINE -> MISC_ID | TEXT_ONLY | MISC_ID_MOD MOD:? SPELL:?
