MAIN ->
  ADDON_LINE |
  CAST_LINE |
  CASTRANDOM_LINE |
  CASTSEQUENCE_LINE |
  CHAT_LINE |
  EMOTE_LINE |
  EQUIP_LINE |
  INVITE_LINE |
  RUN_LINE |
  SETTINGS_LINE |
  SHOWTOOLTIP_LINE |
  TARGET_LINE |
  USE_LINE |
  WHO_LINE |
  MISC_LINE

ANYTHING_CONTENT -> [a-zA-Z-0-9!? :;='",\.+\ >/\\~%|()[\]{}]:+ {% d => d[0].join('') %}
ANYTHING -> [^/] ANYTHING_CONTENT

_ -> " ":+ {% d => d[0].join('') %}
COMMA -> _:? "," _:? {% data => data.join('') %}
SEMICOLON -> _:? ";" _:? {% data => ({type: 'separator', data: ';'}) %}
COLON ->  _:? ":" _:? {% data => data.join('') %}
BRACKET_OPEN -> _:? "[" _:? {% data => data.join('') %}
BRACKET_CLOSE -> _:? "]" _:? {% data => data.join('') %}
EQUAL -> _:? "=" _:? {% data => data.join('') %}

NUMBER -> [0-9]:+ {% data => ({ type: "number", data: data[0].join('')}) %}
NUMBER_RANGE -> NUMBER "-" NUMBER
NUMBER_DECIMAL -> NUMBER "." NUMBER

TEXT -> [a-zA-Z]:+ {% d => d[0].join('') %}

NICK -> TEXT

SPELL_PREFIX -> "!"
SPELL_SEPARATOR -> _:? "-" _:? | _:? "'" _:? | _:? ":" _:? | _
SPELL_PART -> TEXT | SPELL_PART SPELL_SEPARATOR TEXT {% data => data.join('') %}
SPELL_SUFFIX_CUSTOM -> "Feral" | "Racial" | "Cat" | "Bear" | "Demon" | "Shapeshift"
SPELL_SUFFIX_RANK -> "Rank " NUMBER
SPELL_SUFFIX_OPTIONS -> SPELL_SUFFIX_CUSTOM | SPELL_SUFFIX_RANK
SPELL_SUFFIX -> "(" SPELL_SUFFIX_OPTIONS ")"

SPELL -> SPELL_PREFIX:? SPELL_PART _:? SPELL_SUFFIX:? {% data => ({ type: "spell", data: data.join('')}) %}
