-- Import other files variables
local _, L = ...;

-- classIndex: 3
MacroCollection_HUNTER = {
  -- SPECS
  {
    ["name"] = L["Beast Mastery"],
    ["description"] = L["A master of the wild who can tame a wide variety of beasts to assist him in combat."],
    ["spellID"] = "211232",
    ["macro"] = "/run SetSpecialization(1)",
    ["class"] = 3,
  },
  {
    ["name"] = L["Marksmanship"],
    ["description"] = L["A master archer or sharpshooter who excels in bringing down enemies from afar."],
    ["spellID"] = "211233",
    ["macro"] = "/run SetSpecialization(2)",
    ["class"] = 3,
  },
  {
    ["name"] = L["Survival"],
    ["description"] = L["A rugged tracker who favors using animal venom, explosives and traps as deadly weapons."],
    ["spellID"] = "211234",
    ["macro"] = "/run SetSpecialization(3)",
    ["class"] = 3,
  },

  -- SKILLS
  {
    ["name"] = L["Auto"] .. " " .. L["Misdirection"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Misdirection"] .. " " .. L["on focused target"] .. ". " .. L["If you don't have"] .. ", " .. L["cast it"] .. " " .. L["on"] .. " " .. L["your Target's target"] .. ".",
    ["spellID"] = "34477",
    ["macro"] = "#showtooltip " .. L["Misdirection"] .. " \n/stopcasting \n/cast [target=focus,exists][target=targettarget,exists]" .. L["Misdirection"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Attack"] .. " " .. L["with"] .. " " .. L["Dire Beast"] .. " " .. L["and"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Dire Beast"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "120679",
    ["macro"] = "#showtooltip " .. L["Dire Beast"] .. " \n/cast " .. L["Dire Beast"] .. " \n/petattack \n/petattack",
    ["class"] = 3,
  },
  {
    ["name"] = L["Cancel"] .. " " .. L["Aspect of the Turtle"],
    ["description"] = L["This macro"] .. " " .. L["will cancel"] .. " " .. L["Aspect of the Turtle"] .. ".",
    ["spellID"] = "186265",
    ["macro"] = "/cancelaura " .. L["Aspect of the Turtle"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Chimaera Shot"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Chimaera Shot"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "53209",
    ["macro"] = "#showtooltip " .. L["Chimaera Shot"] .. " \n/petattack \n/cast " .. L["Chimaera Shot"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Cobra Shot"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Cobra Shot"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "193455",
    ["macro"] = "#showtooltip " .. L["Cobra Shot"] .. " \n/petattack \n/cast " .. L["Cobra Shot"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Concussive Shot"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Concussive Shot"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "5116",
    ["macro"] = "#showtooltip " .. L["Concussive Shot"] .. " \n/petattack \n/cast " .. L["Concussive Shot"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Growl"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["allows you"] .. " " .. L["to cast"] .. " " .. L["Growl"] .. " " .. L["with"] .. " " .. L["your"] .. " " .. L["pet"] .. ".",
    ["spellID"] = "2649",
    ["macro"] = "#showtooltip " .. L["Growl"] .. " \n/petattack \n/cast " .. L["Growl"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Lacerate"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Lacerate"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "185855",
    ["macro"] = "#showtooltip " .. L["Lacerate"] .. " \n/petattack \n/cast " .. L["Lacerate"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Marked Shot"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .." " .. L["Marked Shot"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "185901",
    ["macro"] = "#showtooltip " .. L["Marked Shot"] .. " \n/petattack \n/cast " .. L["Marked Shot"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Misdirection"] .. " " .. L["on"] .. " " .. L["Focus"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Misdirection"] .. " " .. L["on focused target"] .. ".",
    ["spellID"] = "34477",
    ["macro"] = "#showtooltip " .. L["Misdirection"] .. " \n/stopcasting \n/cast [target=focus,exists]" .. L["Misdirection"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Multi-Shot"] .. " " .. L["with"] .. " " .. L["pet"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Multi-Shot"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "48872",
    ["macro"] = "#showtooltip " .. L["Multi-Shot"] .. " \n/petattack \n/cast " .. L["Multi-Shot"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Power up"] .. " " .. L["and"] .. " " .. L["attack"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Kill Command"] .. " " .. L["and"] .. " " .. L["updates your pet's target"] .. ".",
    ["spellID"] = "34026",
    ["macro"] = "#showtooltip " .. L["Kill Command"] .. " \n/petattack \n/cast " .. L["Kill Command"],
    ["class"] = 3,
  },
  {
    ["name"] = L["Secure"] .. " " .. L["Feign Death"],
    ["description"] = L["This macro"] .. " " .. L["will cast"] .. " " .. L["Feign Death"] .." " .. L["instantly"] .. ".",
    ["spellID"] = "5384",
    ["macro"] = "#showtooltip " .. L["Feign Death"] .." \n/stopcasting \n/petfollow \n/cast " .. L["Feign Death"],
    ["class"] = 3,
  },
}
-- {
--   ["name"] = "",
--   ["description"] = "",
--   ["spellID"] = "",
--   ["macro"] = "",
--   ["class"] = 3,
-- },
