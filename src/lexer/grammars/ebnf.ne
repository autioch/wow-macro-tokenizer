# http://wowwiki.wikia.com/wiki/Making_a_macro#Complete_EBNF_syntax
# https://wow.gamepedia.com/Making_a_macro#Complete_EBNF_syntax

COMMAND -> "/", COMMAND_VERB, [ {COMMAND_OBJECT, ";" } COMMAND_OBJECT] ]

COMMAND_VERB -> ? any secure command word ?

COMMAND_OBJECT -> { CONDITION } PARAMETERS

PARAMETERS -> ? anything which may be passed to the command word ?

CONDITION -> "[" CONDITION_PHRASE { "," CONDITION_PHRASE } "]"

CONDITION_PHRASE -> ([ "no" ], OPTION_WORD, [ ":" CONDITION_OPTION { "/" CONDITION_OPTION } ] | "target=", TARGET | "@", TARGET)

CONDITION_OPTION -> ? any one-word option, such as 'shift, 'ctrl', 'target', '1', '2' ?

TARGET -> ? a target pattern ?
