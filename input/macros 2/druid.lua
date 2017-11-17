-- Import other files variables
local _, L = ...;

-- classIndex: 11
MacroCollection_DRUID = {
  -- SPECS
  {
    ["name"] = L["Balance"],
    ["description"] = L["Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance."],
    ["spellID"] = "211228",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 11,
  },
  {
    ["name"] = L["Feral"],
    ["description"] = L["Takes on the form of a great cat to deal damage with bleeds and bites."],
    ["spellID"] = "211229",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 11,
  },
  {
    ["name"] = L["Guardian"],
    ["description"] = L["Takes on the form of a mighty bear to absorb damage and protect allies."],
    ["spellID"] = "211230",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 11,
  },
  {
    ["name"] = L["Restoration"],
    ["description"] = L["Uses heal-over-time Nature spells to keep allies alive."],
    ["spellID"] = "211231",
    ["macro"] = "/run SetSpecialization(4)",
    ["class"] = 11,
  },
  -- SKILLS
  {
    ["name"] = L["Displacer Beast"],
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Displacer Beast"] .. "  " .. L["and"] .. " " .. L["will cancel"] .. " " .. L["Cat Form"] .. ".",
    ["spellID"] = "102280",
    ["macro"] = "#showtooltip " .. L["Displacer Beast"] .." \n/stopcasting \n/cast " .. L["Displacer Beast"] .." \n/cancelaura " .. L["Cat Form"],
    ["class"] = 11,
  },
  {
    ["name"] = L["Remove Corruption"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. "  " .. L["will cast"] .. " " .. L["Remove Corruption"] .." " .. L["on focused target"] .. ".",
    ["spellID"] = "2782",
    ["macro"] = "#showtooltip " .. L["Remove Corruption"] .." \n/stopcasting \n/cast [target=focus,exists]" .. L["Remove Corruption"] ..";" .. L["Remove Corruption"] .."",
    ["class"] = 11,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 11,
-- },
