-- Import other files variables
local _, L = ...;

-- classIndex: 6
MacroCollection_DEATHKNIGHT = {
  -- SPECS
  {
    ["name"] = L["Blood"],
    ["description"] = L["A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught."],
    ["spellID"] = "211222",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 6,
  },
  {
    ["name"] = L["Frost"],
    ["description"] = L["An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes."],
    ["spellID"] = "211223",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 6,
  },
  {
    ["name"] = L["Unholy"],
    ["description"] = L["A master of death and decay, spreading infection and controlling undead minions to do her bidding."],
    ["spellID"] = "211225",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 6,
  },

  -- SKILLS
  {
    ["name"] = L["DK live saver"],
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to transfer"] .. " 90% " .. L["of the damage you take"] .. " " .. L["to"] .. " " .. L["your"] .. " " .. L["pet"] .. ", " .. L["while"] .. " " .. L["your"] .. " " .. L["pet"] .. " " .. L["has"] .. " 60% " .. L["damage reduction"] .. ".";
    ["spellID"] = "207319",
    ["macro"] = "#showtooltip " .. L["Corpse Shield"] .. " \n/cast " .. L["Dark Transformation"] .. " \n/cast " .. L["Huddle"] .. " \n/cast " .. L["Protective Bile"] .. " \n/cast " .. L["Corpse Shield"],
    ["class"] = 6,
  },
  {
    ["name"] = L["Secure"] .. " " .. L["Mind Freeze"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Mind Freeze"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "47528",
    ["macro"] = "#showtooltip " .. L["Mind Freeze"] .." \n/stopcasting \n/cast " .. L["Mind Freeze"],
    ["class"] = 6,
  },
}
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 6,
-- },
