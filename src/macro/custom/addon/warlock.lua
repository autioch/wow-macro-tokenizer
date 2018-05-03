-- Import other files variables
local _, L = ...;

-- classIndex: 9
MacroCollection_WARLOCK = {
  -- SPECS
  {
    ["name"] = L["Affliction"],
    ["description"] = L["A master of shadow magic who specializes in drains and damage-over-time spells."],
    ["spellID"] = "211250",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 9,
  },
  {
    ["name"] = L["Demonology"],
    ["description"] = L["A master of demons who compels demonic powers to aid him."],
    ["spellID"] = "211251",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 9,
  },
  {
    ["name"] = L["Destruction"],
    ["description"] = L["A master of chaos who calls down fire to burn and demolish enemies."],
    ["spellID"] = "211252",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 9,
  },

  -- SKILLS
  {
    ["name"] = L["Cancel"] .. " " .. L["Demonic Circle"],
    ["description"] = L["This macro"] .. " " .. L["will cancel"] .. " " .. L["Demonic Circle"] .. ".",
    ["spellID"] = "48020",
    ["macro"] = "/cancelaura " .. L["Demonic Circle"],
    ["class"] = 9,
  },
  {
    ["name"] = L["Havoc"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Havoc"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "80240",
    ["macro"] = "#showtooltip " .. L["Havoc"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Havoc"],
    ["class"] = 9,
  },
  {
    ["name"] =  L["Secure"] .. " " .. L["Demonic Circle"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Demonic Circle"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "48020",
    ["macro"] = "#showtooltip " .. L["Demonic Circle"] .." \n/stopcasting \n/cast " .. L["Demonic Circle"],
    ["class"] = 9,
  },
  {
    ["name"] = L["Soulstone"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will use"] .. " " .. L["Soulstone"] .. " " .. L["on focused target"] .. ".",
    ["itemID"] = "5232",
    ["macro"] = "#showtooltip " .. L["Soulstone"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Soulstone"] .. ";" .. L["Soulstone"] .. "",
    ["class"] = 9,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 9,
-- },
