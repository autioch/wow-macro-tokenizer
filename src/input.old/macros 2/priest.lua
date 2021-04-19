-- Import other files variables
local _, L = ...;

-- classIndex: 5
MacroCollection_PRIEST = {
  -- SPECS
  {
    ["name"] = L["Discipline"],
    ["description"] = L["Uses magic to shield allies from taking damage as well as heal their wounds."],
    ["spellID"] = "211241",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 5,
  },
  {
    ["name"] = L["Holy"],
    ["description"] = L["A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave."],
    ["spellID"] = "211242",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 5,
  },
  {
    ["name"] = L["Shadow"],
    ["description"] = L["Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies."],
    ["spellID"] = "211243",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 5,
  },

  -- SKILLS
  {
    ["name"] = L["Dispersion"] .. " (" .. L["Cancellable"] .. ")",
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Dispersion"] .. " " .. L["and"] .. " " .. L["cancel it"] .. " " .. L["(by pressing it a second time)"] .. ".",
    ["spellID"] = "164444",
    ["macro"] = "#showtooltip " .. L["Dispersion"] .. " \n/stopcasting \n/cast " .. L["Dispersion"] .. " \n/cancelaura " .. L["Dispersion"] .. "",
    ["class"] = 5,
  },
  {
    ["name"] = L["Leap of Faith"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Leap of Faith"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "73325",
    ["macro"] = "#showtooltip " .. L["Leap of Faith"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Leap of Faith"] .. ";" .. L["Leap of Faith"] .. "",
    ["class"] = 5,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 5,
-- },
