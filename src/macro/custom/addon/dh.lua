-- Import other files variables
local _, L = ...;

-- classIndex: 12
MacroCollection_DEMONHUNTER = {
  -- SPECS
  {
    ["name"] = L["Havoc"],
    ["description"] = L["A brooding master of warglaives and the destructive power of Fel magic."],
    ["spellID"] = "211226",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 12,
  },
  {
    ["name"] = L["Vengeance"],
    ["description"] = L["Embraces the demon within to incinerate enemies and protect their allies."],
    ["spellID"] = "211227",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 12,
  },

  -- SKILLS
  {
    ["name"] = L["Consume Magic"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Consume Magic"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "183752",
    ["macro"] = "#showtooltip " .. L["Consume Magic"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Consume Magic"] .. ";" .. L["Consume Magic"] .. "",
    ["class"] = 12,
  },
  {
    ["name"] = L["Torment"] .. " " .. L["on"] .. " " .. L["Mouseover"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Torment"] .. " " .. L["on mouseover target"] .. ".",
    ["spellID"] = "185245",
    ["macro"] = "#showtooltip " .. L["Torment"] .. " \n/stopcasting \n/cast [@mouseover,enemy,nodead]" .. L["Torment"] .. ";" .. L["Torment"] .. "",
    ["class"] = 12,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 12,
-- },
