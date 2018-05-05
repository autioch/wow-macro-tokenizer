-- Import other files variables
local _, L = ...;

-- classIndex: 2
MacroCollection_PALADIN = {
  -- SPECS
  {
    ["name"] = L["Holy"],
    ["description"] = L["Invokes the power of the Light to protect and to heal."],
    ["spellID"] = "211238",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 2,
  },
  {
    ["name"] = L["Protection"],
    ["description"] = L["Uses Holy magic to shield himself and defend allies from attackers."],
    ["spellID"] = "211239",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 2,
  },
  {
    ["name"] = L["Retribution"],
    ["description"] = L["A righteous crusader who judges and punishes opponents with weapons and Holy magic."],
    ["spellID"] = "211240",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 2,
  },

  -- SKILLS
  {
    ["name"] = L["Beacon of Light"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Beacon of Light"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "53563",
    ["macro"] = "#showtooltip " .. L["Beacon of Light"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Beacon of Light"] .. ";" .. L["Beacon of Light"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Beacon of Virtue"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Beacon of Virtue"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "200025",
    ["macro"] = "#showtooltip " .. L["Beacon of Virtue"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Beacon of Virtue"] .. ";" .. L["Beacon of Virtue"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Blessing of Protection"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Blessing of Protection"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "1022",
    ["macro"] = "#showtooltip " .. L["Blessing of Protection"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Blessing of Protection"] .. ";" .. L["Blessing of Protection"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Blessing of Freedom"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Blessing of Freedom"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "1044",
    ["macro"] = "#showtooltip " .. L["Blessing of Freedom"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Blessing of Freedom"] .. ";" .. L["Blessing of Freedom"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Cleanse"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Cleanse"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "4987",
    ["macro"] = "#showtooltip " .. L["Cleanse"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Cleanse"] .. ";" .. L["Cleanse"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Cleanse Toxins"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Cleanse Toxins"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "213644",
    ["macro"] = "#showtooltip " .. L["Cleanse Toxins"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Cleanse Toxins"] .. ";" .. L["Cleanse Toxins"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Divine Shield"] .. " (" .. L["Cancellable"] .. ")",
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Divine Shield"] .. " " .. L["and"] .. " " .. L["cancel it"] .. " " .. L["(by pressing it a second time)"] .. ".",
    ["spellID"] = "642",
    ["macro"] = "#showtooltip " .. L["Divine Shield"] .. " \n/stopcasting \n/cast " .. L["Divine Shield"] .. " \n/cancelaura " .. L["Divine Shield"] .. "",
    ["class"] = 2,
  },
  {
    ["name"] = L["Lay on Hands"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Lay on Hands"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "633",
    ["macro"] = "#showtooltip " .. L["Lay on Hands"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Lay on Hands"] .. ";" .. L["Lay on Hands"],
    ["class"] = 2,
  },
  {
    ["name"] = L["Secure"] .. " " .. L["Divine Shield"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Divine Shield"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "642",
    ["macro"] = "#showtooltip " .. L["Divine Shield"] .." \n/stopcasting \n/cast " .. L["Divine Shield"],
    ["class"] = 2,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 12,
-- },
