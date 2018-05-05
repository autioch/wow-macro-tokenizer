CHUNK -> _ BLOCK _
BLOCK -> _BLOCK | _BLOCK __ RETURN_STAT
RETURN_STAT -> "return" __ EXP_LIST | "return" __ EXP_LIST _ ";"
_BLOCK -> STATEMENT | _BLOCK _ ";" _ STATEMENT | _BLOCK __ STATEMENT

STATEMENT ->
  VarList _ "=" _ EXP_LIST
  | FunctionCall
  | LABEL
  | "break"
  | "goto" __ Name
  | "do" __ BLOCK __ "end"
  | "while" __ Exp __ "do" __ BLOCK __ "end"
  | "repeat" __ BLOCK __ "until" __ Exp
  | "if" __ Exp __ "then" __ BLOCK __ ELSE
  | "for" __ NameList __ "in" __ EXP_LIST __ "do" __ BLOCK __ "end"
  | "function" __ FunctionName _ FunctionBody
  | "local" __ "function" __ Name __ FunctionBody
  | "local" __ NameList
  | "local" __ NameList _ "=" _ EXP_LIST

ELSE -> "end" | _ELSE __ "end" | _ELSE __ "else" __ BLOCK __ "end"
_ELSE -> "elseif" __ Exp __ "then" __ BLOCK | _ELSE __ "elseif" __ Exp __ "then" __ BLOCK
LABEL -> "::" _ Name _ "::"
Name -> _NAME
_NAME -> [a-zA-Z_] | _NAME [\w_]
NameList -> Name | NameList _ "," _ Name
Var -> Name | PrefixExp _ "[" _ Exp _ "]" | PrefixExp _ "." _ Name
VarList -> Var | VarList _ "," _ Var
EXP_LIST -> Exp | EXP_LIST _ "," _ Exp
PrefixExp -> Var | FunctionCall | Parenthesized
FunctionCall -> PrefixExp _ Args | PrefixExp _ ":" _ Name _ Args
Args -> "(" _ ")" | "(" _ EXP_LIST _ ")" | String
FunctionName -> _functionname | _functionname ":" Name
_functionname -> Name | FunctionName _ "." _ FunctionName
FunctionDef -> "function" __ FunctionBody
FunctionBody -> "(" _ ParamList _ ")" __ BLOCK __ "end" | "(" _ ")" __ BLOCK __ "end"
ParamList -> NameList | NameList _ "," _ "..." | "..."
TableConstructor -> "{" _ FieldList _ "}" | "{" _ "}"
FieldList -> _FieldList | _FieldList _ FieldSep
_FieldList -> Field | _FieldList _ FieldSep _ Field
Field -> "[" _ Exp _ "]" _ "=" _ Exp | Name _ "=" _ Exp | Exp
FieldSep -> "," | ";"
Exp -> ExpOr
Parenthesized -> "(" Exp ")"
ExpOr -> ExpOr __ "or" __ ExpAnd | ExpAnd
ExpAnd -> ExpAnd __ "and" __ EXP_COMPARISON | EXP_COMPARISON
EXP_EQUAL -> "<" | ">" | "<=" | ">=" | "~=" | "=="
EXP_COMPARISON -> EXP_COMPARISON _ EXP_EQUAL _ EXP_CONCATENATION | EXP_CONCATENATION
EXP_CONCATENATION -> EXP_SUM _ ".." _ EXP_CONCATENATION | EXP_SUM
EXP_SUM -> EXP_SUM _ "+" _ EXP_PRODUCT | EXP_SUM _ "-" _ EXP_PRODUCT | EXP_PRODUCT
EXP_PRODUCT -> EXP_PRODUCT _ "*" _ EXP_UNARY | EXP_PRODUCT _ "/" _ EXP_UNARY | EXP_PRODUCT _ "%" _ EXP_UNARY | EXP_UNARY
EXP_UNARY -> "not" __ EXP_POW | "#" _ EXP_POW | "-" _ EXP_POW | EXP_POW
EXP_POW -> Atom | Atom _ "^" _ EXP_POW
Atom -> Number | String | PrefixExp | "nil" | "false" | "true" | Parenthesized | FunctionDef | TableConstructor
Number -> _float | _float "e" _int
_posint -> [0-9] | _posint [0-9]
_int -> "-" _posint | _posint
_float -> _int | _int "." _posint
String -> "\"" _string "\""
_string -> null | _string _stringchar
_stringchar -> [^\\"] | "\\" [^]
_ -> null | _ [\s]
__ -> [\s] | __ [\s]
