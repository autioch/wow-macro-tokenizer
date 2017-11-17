
MOD_NOMOD -> "nomod" | "nomodifier"

MOD_TARGET_OPTION -> "target" | "focus" | "player" | NICK {% data => data.join('') %}
MOD_TARGET -> "target=" MOD_TARGET_OPTION | "@" MOD_TARGET_OPTION {% data => data.join('') %}

MOD_KEYBOARD_OPTION -> "ctrl" | "shift" | "alt" {% data => data.join('') %}
MOD_KEYBOARD_PREFIX -> "mod:" | "modifier:" {% data => data.join('') %}
MOD_KEYBOARD -> MOD_KEYBOARD_PREFIX MOD_KEYBOARD_OPTION {% data => data.join('') %}

MOD_MOUNT -> "flyable" | "noflyable" | "nomounted" | "mounted" {% data => data.join('') %}
MOD_COMBAT -> "combat" | "nocombat" | "harm" | "noharm" | "dead" | "nodead" | "noexists" {% data => data.join('') %}

MOD_MOUSE_OPTION -> "1" | "2" {% data => data.join('') %}
MOD_MOUSE -> "button:" MOD_MOUSE_OPTION {% data => data.join('') %}

MOD_PET -> "nopet" | "pet" | "pet" COLON NICK {% data => data.join('') %}

MOD_SPELL -> "nochanneling" | "nochanneling:" SPELL | "nochanneling: " SPELL {% data => data.join('') %}

MOD_BODY -> MOD_NOMOD | MOD_KEYBOARD | MOD_TARGET | MOD_MOUNT | MOD_MOUSE | MOD_COMBAT | MOD_PET | MOD_SPELL {% data => ({ type: "modifierContent", data: data.join('')}) %}
MOD_BODY_LIST -> MOD_BODY | MOD_BODY_LIST COMMA MOD_BODY

MOD -> _ BRACKET_OPEN MOD_BODY_LIST BRACKET_CLOSE {% data => ({ type: "modifier", data: data[2]}) %}
