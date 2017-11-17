MAIN ->
  CAST_LINE |
  CHAT_LINE |
  EMOTE_LINE |
  INVITE_LINE |
  MISC_LINE |
  RUN_LINE |
  SHOWTOOLTIP_LINE |
  TARGET_LINE |
  USE_LINE |
  WHO_LINE

NUMBER -> [0-9]:+ {% d => d[0].join('') %}
NUMBER_RANGE -> NUMBER "-" NUMBER
SPELL -> [a-zA-Z-' ]:+ {% d => d[0].join('') %}
NICK -> [a-zA-Z]:+ {% d => d[0].join('') %}
_ -> " ":+ {% d => d[0].join('') %}
TEXT_ONLY -> [^/]:+ {% d => d[0].join('') %}
