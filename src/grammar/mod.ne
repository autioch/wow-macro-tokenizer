BRACKET_OPEN -> "["
BRACKET_CLOSE -> "]"
COLON -> ":"
EQUAL -> "="
COMMA -> ","

MOD_NOMOD -> "nomod" | "nomodifier"

MOD_TARGET_OPTION -> "target" | "focus" | "player" | NICK
MOD_TARGET -> "target=" MOD_TARGET_OPTION

MOD_KEYBOARD_OPTION -> "ctrl" | "shift" | "alt"
MOD_KEYBOARD_PREFIX -> "mod:" | "modifier:"
MOD_KEYBOARD -> MOD_KEYBOARD_PREFIX MOD_KEYBOARD_OPTION

MOD_MOUNT_OPTION -> "flyable" | "noflyable" | "nomounted" | "mounted"
MOD_MOUNT -> MOD_MOUNT_OPTION

MOD_MOUSE_OPTION -> "1" | "2"
MOD_MOUSE -> "button:" MOD_MOUSE_OPTION

# This must be a repeatable list - with a comma
MOD_BODY -> MOD_NOMOD | MOD_KEYBOARD | MOD_TARGET | MOD_MOUNT | MOD_MOUSE

MOD -> _ BRACKET_OPEN MOD_BODY BRACKET_CLOSE
