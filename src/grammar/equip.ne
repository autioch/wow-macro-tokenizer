EQUIP_SIMPLE_ID -> "/equip" {% data => ({ type: "command", data}) %}
EQUIP_SIMPLE_LINE -> EQUIP_SIMPLE_ID _ SPELL

EQUIPSLOT_ID -> "/equipslot" {% data => ({ type: "command", data}) %}
EQUIPSLOT_ITEM -> SPELL | "item:" NUMBER ":" NUMBER
EQUIPSLOT_LINE -> EQUIPSLOT_ID _ NUMBER _ EQUIPSLOT_ITEM

EQUIP_LINE -> EQUIP_SIMPLE_LINE | EQUIPSLOT_LINE
