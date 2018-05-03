# http://www.lua.org/manual/5.2/manual.html
@{%
  const lexer = require(__dirname + '/lua/' + 'lexer')
%}

@lexer lexer

CHUNK -> BLOCK
BLOCK -> ( STATEMENT STATEMENT_SEP ):+

STATEMENT_SEP -> SPACE ";" SPACE | SPACE
STATEMENT ->
    VAR_LIST SPACE %equal SPACE EXP_LIST |
    FUNC_CALL |
    LABEL |
    "break" |
    "goto" %id |
    "do" BLOCK "end" |
    "while" EXP "do" BLOCK "end" |
    "repeat" BLOCK "until" EXP |
    "if" SPACE EXP SPACE "then" SPACE BLOCK ( "elseif" SPACE EXP SPACE "then" SPACE BLOCK ):* ( "else" SPACE BLOCK ):?  "end" |
    "for" SPACE %id %equal EXP COMMA EXP (COMMA EXP ):? SPACE "do" SPACE BLOCK "end" |
    "for" NAME_LIST "in" EXP_LIST "do" BLOCK "end" |
    "function" %space %id SPACE FUNC_BODY |
    "local" "function" %id FUNC_BODY |
    "local" SPACE NAME_LIST SPACE (%equal SPACE EXP_LIST ):?
COMMA -> SPACE "," SPACE
EXP_ITEM -> VAR | %string | %number | %binop | FUNC_CALL | "nil" | "false" | "true" | TABLE | EXP_ITEM %space EXP_ITEM  # | "(" | ")"
EXP -> (EXP_ITEM):+
EXP_LIST -> EXP (COMMA EXP):*
VAR -> %id (VAR_PART):*
VAR_PART -> ":" %id | "[" VAR_TABLE_INDEX "]" | "." %id
VAR_TABLE_INDEX -> %id | %number
FUNC_ID -> %id (":" %id):* ( "[" %id "]"):?
FUNC_CALL -> FUNC_ID  "(" (EXP_LIST):? ")"
FUNC_BODY -> "(" SPACE FUNC_PARAM SPACE ")" SPACE BLOCK SPACE "end" | "(" SPACE ")" SPACE BLOCK SPACE "end"
FUNC_PARAM -> NAME_LIST | NAME_LIST SPACE "," SPACE "..." | "..."
NAME_LIST -> %id (COMMA %id):*
VAR_LIST ->   %id (COMMA  %id):*
TABLE -> "{" SPACE (TABLE_FIELD_LIST):? "}"
TABLE_FIELD_LIST -> TABLE_FIELD (TABLE_SEP TABLE_FIELD):* (TABLE_SEP):?
TABLE_FIELD -> "[" EXP "]" "=" EXP | %string "=" EXP | EXP
TABLE_SEP -> COMMA | SPACE ";" SPACE
SPACE -> null | %space
