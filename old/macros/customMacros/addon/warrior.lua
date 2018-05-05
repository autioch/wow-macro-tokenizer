-- Import other files variables
local _, L = ...;

-- classIndex: 1
MacroCollection_WARRIOR = {
  -- SPECS
  {
    ["name"] = L["Arms"],
    ["description"] = L["A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike her opponents down."],
    ["spellID"] = "211253",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 1,
  },
  {
    ["name"] = L["Fury"],
    ["description"] = L["A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces."],
    ["spellID"] = "211254",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 1,
  },
  {
    ["name"] = L["Protection"],
    ["description"] = L["A stalwart protector who uses a shield to safeguard himself and his allies."],
    ["spellID"] = "211255",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 1,
  },

  -- SKILLS
  {
    ["name"] = L["Boosted Charge"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Charge"] .. " " .. L["against"] .. " " .. L["your"] .. " " .. L["target"] .. ", " .. L["and"] .. " " .. L["will use"] .. " " .. L["all"] .. " " .. L["your"] .. " " .. L["offensive cooldowns"] .. ".",
    ["spellID"] = "100",
    ["macro"] = "#showtooltip " .. L["Charge"] .. " \n/cast " .. L["Charge"] .. " \n/cast " .. L["Victory Rush"] .. " \n/cast " .. L["Piercing Howl"] .. " \n/cast " .. L["Berserker Rage"] .. " \n/cast " .. L["Recklessness"] .. " \n/cast " .. L["Bloodbath"] .. " \n/cast " .. L["Avatar"] .. " \n/cast " .. L["Battle Cry"] .. "",
    ["class"] = 1,
  },
  {
    ["name"] = L["Bladestorm"] .. " (" .. L["Cancellable"] .. ")",
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Bladestorm"] .. " " .. L["and"] .. " " .. L["cancel it"] .. " " .. L["(by pressing it a second time)"] .. ".",
    ["spellID"] = "46924",
    ["macro"] = "#showtooltip " .. L["Bladestorm"] .. " \n/stopcasting \n/cast " .. L["Bladestorm"] .. " \n/cancelaura " .. L["Bladestorm"] .. "",
    ["class"] = 1,
  },
  {
    ["name"] = L["Secure"] .. " " .. L["Pummel"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Pummel"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "6552",
    ["macro"] = "#showtooltip " .. L["Pummel"] .." \n/stopcasting \n/cast " .. L["Pummel"],
    ["class"] = 1,
  },
  {
    ["name"] = L["Warrior boost"],
    ["description"] = L["This macro"] .. " " .. L["will use"] .. " " .. L["all"] .. " " .. L["your"] .. " " .. L["offensive cooldowns"],
    ["spellID"] = "18499",
    ["macro"] = "#showtooltip " .. L["Piercing Howl"] .. " \n/cast " .. L["Piercing Howl"] .. " \n/cast " .. L["Berserker Rage"] .. " \n/cast " .. L["Recklessness"] .. " \n/cast " .. L["Bloodbath"] .. " \n/cast " .. L["Avatar"] .. " \n/cast " .. L["Battle Cry"],
    ["class"] = 1,
  },
};
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 1,
-- },
