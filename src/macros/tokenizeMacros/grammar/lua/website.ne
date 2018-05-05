# http://www.lua.org/manual/5.2/manual.html

@{%
  const lexer = require(__dirname + '/lua/' + 'lexer')
%}

@lexer lexer

CHUNK -> BLOCK
BLOCK -> (STAT):* (RETSTAT):?

STAT ->  ";" |
	 VAR_LIST "=" EXP_LIST |
	 FUNC_CALL |
	 LABEL |
	 "break" |
	 "goto" IDENTIFIER |
	 "do" BLOCK "end" |
	 "while" EXP "do" BLOCK "end" |
	 "repeat" BLOCK "until" EXP |
	 "if" EXP "then" BLOCK ("elseif" EXP "then" BLOCK):* ("else" BLOCK):? "end" |
	 "for" IDENTIFIER "=" EXP "," EXP ("," EXP ):? "do" BLOCK "end" |
	 "for" NAME_LIST "in" EXP_LIST "do" BLOCK "end" |
	 "function" FUNC_NAME FUNC_BODY |
	 "local" "function" IDENTIFIER FUNC_BODY |
	 "local" NAME_LIST ("=" EXP_LIST ):?


STRING -> "\"" %string "\""
IDENTIFIER -> %string
RETSTAT -> "return" (EXP_LIST ):? (";" ):?
LABEL -> "::" IDENTIFIER "::"
VAR_LIST -> VAR ("," VAR):*
VAR ->  IDENTIFIER | PREFIXEXP "[" EXP "]" | PREFIXEXP "." IDENTIFIER
NAME_LIST -> IDENTIFIER ("," IDENTIFIER):*
EXP_LIST -> EXP ("," EXP):*
EXP ->  "nil" | "false" | "true" | Number | STRING | "..." | FUNC_DEF | PREFIXEXP | TABLE_CONSTRUCTOR | EXP BINOP EXP | UNOP EXP
PREFIXEXP -> VAR | FUNC_CALL | "(" EXP ")"
ARGS ->  "(" (EXP_LIST):? ")" | TABLE_CONSTRUCTOR | STRING
FUNC_BODY -> "(" (PAR_LIST ):? ")" BLOCK "end"
FUNC_CALL ->  PREFIXEXP ARGS | PREFIXEXP ":" IDENTIFIER ARGS
FUNC_DEF -> "function" FUNC_BODY
FUNC_NAME -> IDENTIFIER ("." IDENTIFIER):* (":" IDENTIFIER ):?
PAR_LIST -> NAME_LIST ("," "..." ):? | "..."
TABLE_CONSTRUCTOR -> "{" (FIELD_LIST):? "}"
FIELD_LIST -> FIELD (FIELD_SEP FIELD):* (FIELD_SEP):?
FIELD -> "[" EXP "]" "=" EXP | IDENTIFIER "=" EXP | EXP
FIELD_SEP -> "," | ";"
BINOP -> "+" | "-" | "*" | "/" | "^" | "%" | ".." | "<" | "<=" | ">" | ">=" | "==" | "~=" | "and" | "or"
UNOP -> "-" | "not" | "#"
_ -> null | _ [\s]
