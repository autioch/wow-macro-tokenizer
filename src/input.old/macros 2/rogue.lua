-- Import other files variables
local _, L = ...;

-- classIndex: 4
MacroCollection_ROGUE = {
  -- SPECS
  {
    ["name"] = L["Assassination"],
    ["description"] = L["A deadly master of poisons who dispatches victims with vicious dagger strikes."],
    ["spellID"] = "211244",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 4,
  },
  {
    ["name"] = L["Outlaw"],
    ["description"] = L["A ruthless fugitive who uses agility and guile to stand toe-to-toe with enemies."],
    ["spellID"] = "211245",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 4,
  },
  {
    ["name"] = L["Subtlety"],
    ["description"] = L["A dark stalker who leaps from the shadows to ambush his unsuspecting prey."],
    ["spellID"] = "211246",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 4,
  },

  -- SKILLS
  {
    ["name"] = L["Auto"] .. " " .. L["Tricks of the Trade"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Tricks of the Trade"] .. " " .. L["on focused target"] .. ". " .. L["If you don't have"] .. ", " .. L["cast it"] .. " " .. L["on"] .. " " .. L["your Target's target"] .. ".",
    ["spellID"] = "57934",
    ["macro"] = "#showtooltip " .. L["Tricks of the Trade"] .. " \n/stopcasting \n/cast [target=focus,exists][target=targettarget,exists]" .. L["Tricks of the Trade"],
    ["class"] = 4,
  },
  {
    ["name"] = L["Tricks of the Trade"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Tricks of the Trade"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "57934",
    ["macro"] = "#showtooltip " .. L["Tricks of the Trade"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Tricks of the Trade"],
    ["class"] = 4,
  },
}
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 4,
-- },
