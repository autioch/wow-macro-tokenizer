-- Import other files variables
local _, L = ...;

-- classIndex: 7
MacroCollection_SHAMAN = {
  -- SPECS
  {
    ["name"] = L["Elemental"],
    ["description"] = L["A spellcaster who harnesses the destructive forces of nature and the elements."],
    ["spellID"] = "211247",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 7,
  },
  {
    ["name"] = L["Enhancement"],
    ["description"] = L["A totemic warrior who strikes foes with weapons imbued with elemental power."],
    ["spellID"] = "211248",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 7,
  },
  {
    ["name"] = L["Restoration"],
    ["description"] = L["A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds."],
    ["spellID"] = "211249",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 7,
  },

  -- SKILLS
  {
    ["name"] = L["Purge"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Purge"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "370",
    ["macro"] = "#showtooltip " .. L["Purge"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Purge"] .. ";" .. L["Purge"] .. "",
    ["class"] = 7,
  },
  {
    ["name"] = L["Reincarnation"],
    ["description"] = L["This macro"] .. " " .. L["will show you"] .. " " .. L["remaining time"] .. " " .. L["for"] .. " " .. L["being able to use"] .. " " .. L["Reincarnation"] .. ".",
    ["spellID"] = "20608",
    ["macro"] = "#showtooltip " .. L["Reincarnation"],
    ["class"] = 7,
  },
  {
    ["name"] =  L["Secure"] .. " " .. L["Gust of Wind"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Gust of Wind"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "192063",
    ["macro"] = "#showtooltip " .. L["Gust of Wind"] .." \n/stopcasting \n/cast " .. L["Gust of Wind"],
    ["class"] = 7,
  },
  {
    ["name"] =  L["Secure"] .. " " .. L["Wind Shear"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Wind Shear"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "57994",
    ["macro"] = "#showtooltip " .. L["Wind Shear"] .." \n/stopcasting \n/cast " .. L["Wind Shear"],
    ["class"] = 7,
  },
  {
    ["name"] = L["Shaman boost"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Feral Spirit"] .. " " .. L["and"] .. " " .. L["Spirit Walk"] .. ".",
    ["spellID"] = "51533",
    ["macro"] = "#showtooltip " .. L["Feral Spirit"] .. " \n/stopcasting \n/cast " .. L["Feral Spirit"] .. " \n/cast " .. L["Spirit Walk"],
    ["class"] = 7,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 7,
-- },
