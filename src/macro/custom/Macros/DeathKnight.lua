local _, Sequences = ...

------------------
----- Death Knight
------------------
Sequences['Frosty_heal'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Lichkingsbro@Draka",
  SpecID=251,
  Talents = "1213211",
  Help = [[Max Healing]],
  Default=1,
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/cast Icebound Fortitude",
      },
      PreMacro={
      },
        "/cast Death Strike",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Frosty_the_snowman_aoe'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Lichkingsbro@Draka",
  SpecID=251,
  Talents = "1213211",
  Help = [[Alt for Frostscythe
ctrl for Howling Blast
]],
  Default=1,
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/cast Pillar of Frost",
        "/cast Empower Rune Weapon",
        "/cast Anti-Magic Shell",
        "/cast [mod:alt] Frostscythe",
        "/cast [mod:ctrl] Howling Blast",
      },
      PreMacro={
        "/cast Remorseless Winter",
      },
        "/castsequence Howling Blast, Frostscythe",
        "/cast Remorseless Winter",
        "/cast Frost Strike",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Frosty_the_snowman_st'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Lichkingsbro@Draka",
  SpecID=251,
  Talents = "1213211",
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/cast Obliteration",
        "/cast Pillar of Frost",
        "/cast Empower Rune Weapon",
        "/cast Anti-Magic Shell",
        "/cast [mod:alt] Obliterate",
        "/cast [mod:ctrl] Howling Blast",
      },
      PreMacro={
        "/cast Remorseless Winter",
      },
        "/castsequence Obliterate, Howling Blast",
        "/cast Remorseless Winter",
        "/cast Frost Strike",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Frosty_the_snowman_st_raider'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Lichkingsbro@Draka",
  SpecID=251,
  Talents = "1213211",
  Help = [[alt for Obliterate
ctrl for Howling Blast
Removed Empower Rune Weapon,Anti-Magic Shell for time specific usage.]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/cast Obliteration",
        "/cast Pillar of Frost",
        "/cast [mod:alt] Obliterate",
        "/cast [mod:ctrl] Howling Blast",
      },
      PreMacro={
        "/cast Remorseless Winter",
      },
        "/castsequence Obliterate, Howling Blast",
        "/cast Remorseless Winter",
        "/cast Frost Strike",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Bloody'] = {
-- This Sequence was exported from GSE 2.1.07.
  Author="Lichkingsbro@Draka",
  SpecID=250,
  Talents = "2112133",
  Default=1,
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/cast Dancing Rune Weapon",
        "/cast Vampiric Blood",
        "/cast Anti-Magic Shell",
        "/cast [mod:alt] Death's Caress",
      },
      PreMacro={
      },
        "/cast [@player] Death and Decay",
        "/castsequence  reset=combat/target  Blood Boil, Marrowrend",
        "/castsequence Blood Boil, Blood Boil, Marrowrend, Marrowrend, Marrowrend, Heart Strike, Heart Strike, Death Strike",
        "/cast Blood Boil",
        "/cast Consumption",
        "/cast Heart Strike",
        "/cast Death Strike",
        "/castsequence  reset=combat/target  Heart Strike, Heart Strike, Heart Strike, Death Strike, Marrowrend",
        "/cast [@player] Death and Decay",
      PostMacro={
        "/cast Death Strike",
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Unholy_god'] = {
-- This Sequence was exported from GSE 2.1.07.
  Author="Lichkingsbro@Draka",
  SpecID=252,
  Talents = "2211332",
  Help = [[This is a apart of the addon pack: papa's collection
Hold alt if outbreak is off the target]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/castsequence  reset=target/combat  Outbreak, null",
        "/cast [mod:alt] Outbreak",
        "/cast [nopet,nodead] Raise Dead",
      },
      PreMacro={
        "/cast Dark Transformation",
      },
        "/cast [@player] Defile",
        "/castsequence Festering Strike, Festering Strike, Scourge Strike",
        "/castsequence Festering Strike, Festering Strike, Scourge Strike, Apocalypse",
        "/castsequence  reset=1  Scourge Strike",
        "/cast [combat] Summon Gargoyle",
        "/cast Death Coil",
        "/cast [combat] Dark Transformation",
        "/cast [@player] Defile",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}


