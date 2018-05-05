-- Import other files variables
local _, L = ...;

-- classIndex: 8
MacroCollection_MAGE = {
  -- SPECS
  {
    ["name"] = L["Arcane"],
    ["description"] = L["Manipulate the arcane, destroying enemies with overwhelming power."],
    ["spellID"] = "211211",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 8,
  },
  {
    ["name"] = L["Fire"],
    ["description"] = L["Ignite enemies with balls of fire and combustive flames."],
    ["spellID"] = "211214",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 8,
  },
  {
    ["name"] = L["Frost"],
    ["description"] = L["Freezes enemies in their tracks and shatters them with Frost magic."],
    ["spellID"] = "211215",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 8,
  },

  -- SKILLS
  {
    ["name"] = L["Cancel"] .. " " .. L["Ice Block"],
    ["description"] = L["This macro"] .. " " .. L["will cancel"] .. " " .. L["Ice Block"] .. ".",
    ["spellID"] = "45438",
    ["macro"] = "/cancelaura " .. L["Ice Block"],
    ["class"] = 8,
  },
  {
    ["name"] = L["CounterSpell"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["CounterSpell"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "2139",
    ["macro"] = "#showtooltip " .. L["CounterSpell"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["CounterSpell"] .. ";" .. L["CounterSpell"],
    ["class"] = 8,
  },
  {
    ["name"] = L["Distant Missiles"],
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Displacement"] .. " " .. L["and"] .. " " .. L["then"] .. ", " .. L["Arcane Missiles"] .. ".",
    ["spellID"] = "5143",
    ["macro"] = "#showtooltip " .. L["Arcane Missiles"] .. " \n/stopcasting \n/castsequence " .. L["Displacement"] .. ", " .. L["Arcane Missiles"],
    ["class"] = 8,
  },
  {
    ["name"] = L["Freeze"],
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to use"] .. " " .. L["Freeze"] .. " " .. L["from"] .. " " .. L["your"] .. " " .. L["pet"] .. ".",
    ["spellID"] = "33395",
    ["macro"] = "#showtooltip " .. L["Freeze"] .. " \n/cast " .. L["Freeze"],
    ["class"] = 8,
  },
  {
    ["name"] = L["Ice Block"] .. " (" .. L["Cancellable"] .. ")",
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Ice Block"] .. " " .. L["and"] .. " " .. L["cancel it"] .. " " .. L["(by pressing it a second time)"] .. ".",
    ["spellID"] = "45438",
    ["macro"] = "#showtooltip " .. L["Ice Block"] .. " \n/stopcasting \n/cast " .. L["Ice Block"] .. " \n/cancelaura " .. L["Ice Block"] .. "",
    ["class"] = 8,
  },
  {
    ["name"] = L["Polymorph"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Polymorph"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "118",
    ["macro"] = "#showtooltip " .. L["Polymorph"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Polymorph"] .. ";" .. L["Polymorph"] .. "",
    ["class"] = 8,
  },
  {
    ["name"] = L["Secure"] .. " " .. L["Blink"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Blink"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "21655",
    ["macro"] = "#showtooltip " .. L["Blink"] .." \n/stopcasting \n/cast " .. L["Blink"],
    ["class"] = 8,
  },
  {
    ["name"] = L["Spellsteal"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Spellsteal"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "30449",
    ["macro"] = "#showtooltip " .. L["Spellsteal"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Spellsteal"] .. ";" .. L["Spellsteal"] .. "",
    ["class"] = 8,
  },
}
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 8,
-- },
