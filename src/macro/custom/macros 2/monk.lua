-- Import other files variables
local _, L = ...;

-- classIndex: 10
MacroCollection_MONK = {
  -- SPECS
  {
    ["name"] = L["Brewmaster"],
    ["description"] = L["A sturdy brawler who uses liquid fortification and unpredictable movement to avoid damage and protect allies."],
    ["spellID"] = "211235",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 10,
  },
  {
    ["name"] = L["Mistweaver"],
    ["description"] = L["A martial artist without peer who pummels foes with hands and fists."],
    ["spellID"] = "211236",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 10,
  },
  {
    ["name"] = L["Windwalker"],
    ["description"] = L["A healer who masters the mysterious art of manipulating life energies, aided by the wisdom of the Jade Serpent and Pandaren medicinal techniques."],
    ["spellID"] = "211237",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 10,
  },
  
  -- SKILLS
  {
    ["name"] = L["Auto"] .. " " .. L["Chi Wave"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Chi Wave"] .. " " .. L["on"] .. " " .. L["your"] .. " " .. L["target"] .. " " .. L["(if it's an enemy)"] .. ". " .. L["If you don't have"] .. ", " .. L["cast it"] .. " " .. L["on you"] .. ".",
    ["spellID"] = "115098",
    ["macro"] = "#showtooltip " .. L["Chi Wave"] .. " \n/cast [@target,enemy][@player]" .. L["Chi Wave"] .. ";" .. L["Chi Wave"] .. "",
    ["class"] = 10,
  },
  {
    ["name"] = L["Detox"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Detox"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "115450",
    ["macro"] = "#showtooltip " .. L["Detox"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Detox"] .. ";" .. L["Detox"] .. "",
    ["class"] = 10,
  },
  {
    ["name"] = L["Ring of Peace"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Ring of Peace"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "116844",
    ["macro"] = "#showtooltip " .. L["Ring of Peace"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Ring of Peace"] .. ";" .. L["Ring of Peace"] .. "",
    ["class"] = 10,
  },
  {
    ["name"] = L["Taunt from Statue"],
    ["description"] = L["This macro"] .. " " .. L["will taunt"] .. " " .. L["all targets"] .. " " .. L["around"] .. " " .. L["your"] .. " " .. L["Black Ox Statue"] .. ".",
    ["spellID"] = "115315",
    ["macro"] = "#showtooltip " .. L["Provoke"] .. " \n/target " .. L["Black Ox Statue"] .. " \n/cast " .. L["Provoke"] .. " \n/targetlasttarget",
    ["class"] = 10,
  },
  {
    ["name"] = L["Tiger's Lust"] .. " " .. L["on"] .. " " .. L["Mouseover"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Tiger's Lust"] .. " " .. L["on mouseover target"] .. ".",
    ["spellID"] = "116841",
    ["macro"] = "#showtooltip " .. L["Tiger's Lust"] .. " \n/stopcasting \n/cast [@mouseover,help,nodead]" .. L["Tiger's Lust"] .. ";" .. L["Tiger's Lust"] .. "",
    ["class"] = 10,
  },
}
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 10,
-- },
