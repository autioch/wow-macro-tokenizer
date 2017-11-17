
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
