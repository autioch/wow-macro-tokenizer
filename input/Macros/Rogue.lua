local _, Sequences = ...

------------------
----- Rogue
------------------

-- Rogue(specID = 260)

Sequences['papa_outlaw'] = {
-- This Sequence was exported from GSE 2.1.07.
  Author="Galvet@Draka",
  SpecID=260,
  Talents = "3231322",
  Help = [[auto,blade flurry has to be applied manually for aoe ]],
  Default=1,
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/cast Curse of the Dreadblades",
        "/cast Adrenaline Rush",
        "/cast Marked for Death",
        "/cast [target=party1] Tricks of the Trade",
      },
      PreMacro={
        "/cast [nostealth,nocombat] Stealth",
        "/cast [stealth] Ambush",
      },
        "/castsequence Saber Slash, Saber Slash, Pistol Shot, Run Through, Saber Slash, Slice and Dice",
      PostMacro={
      },
      KeyRelease={
        "/cast [nostealth,nocombat] Stealth",
      },
    },
  },
}

Sequences['papa_outlaw_alt_macro'] = {
-- This Sequence was exported from GSE 2.1.07.
  Author="Galvet@Draka",
  SpecID=260,
  Talents = "3231323",
  Help = [[manual slice and dice]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/cast Curse of the Dreadblades",
        "/cast Adrenaline Rush",
        "/cast Marked for Death",
        "/cast [mod:alt] Slice and Dice",
        "/cast [target=party1] Tricks of the Trade",
      },
      PreMacro={
        "/cast [nostealth,nocombat] Stealth",
        "/cast [stealth] Ambush",
      },
        "/castsequence Saber Slash, Saber Slash, Pistol Shot, Run Through",
      PostMacro={
      },
      KeyRelease={
        "/cast [nostealth,nocombat] Stealth",
      },
    },
  },
}

Sequences['papa_outlaw_alt_macro_bones'] = {
-- This Sequence was exported from GSE 2.1.07.
  Author="Galvet@Draka",
  SpecID=260,
  Talents = "3231323",
  Help = [[manual roll]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/cast Curse of the Dreadblades",
        "/cast Adrenaline Rush",
        "/cast Marked for Death",
        "/cast [mod:alt] Roll the Bones",
        "/cast [target=party1] Tricks of the Trade",
      },
      PreMacro={
        "/cast [nostealth,nocombat] Stealth",
        "/cast [stealth] Ambush",
      },
        "/castsequence Saber Slash, Saber Slash, Pistol Shot, Run Through",
      PostMacro={
      },
      KeyRelease={
        "/cast [nostealth,nocombat] Stealth",
      },
    },
  },
}

Sequences['Papa_ASS'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Galvet@Draka",
  SpecID=259,
  Talents = "1231111",
  Help = [[ST auto
Use talents: 1231111]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/cast Vendetta",
      },
      PreMacro={
        "/cast [nostealth,nocombat] Stealth",
        "/cast [stealth] Shadowstep",
        "/cast [stealth] Garrote",
      },
        "/castsequence  reset=target/combat  Mutilate, Rupture, Mutilate, Envenom",
        "/cast Kingsbane",
        "/cast Toxic Blade",
        "/cast Garrote",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Papa_ASS_aoe'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Galvet@Draka",
  SpecID=259,
  Talents = "1231111",
  Help = [[aoe 
tab target after Rupture 
Use talents: 1231111]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
      },
      PreMacro={
      },
        "/castsequence  reset=target/combat  Fan of Knives, Rupture, Fan of Knives, Envenom",
        "/cast Fan of Knives",
        "/cast Kingsbane",
        "/cast Toxic Blade",
        "/cast Garrote",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Papa_ASS_manual'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Galvet@Draka",
  SpecID=259,
  Talents = "1231111",
  Help = [[Most control
Use talents: 1231111
Hold alt and press  for Rupture.
Hold Ctrl and press for  Envenom.]],
  Default=1,
  MacroVersions = {
    [1] = {
     Combat=true,
      StepFunction = "Sequential",
      KeyPress={
        "/cast Vendetta",
        "/cast [mod:alt] Rupture",
        "/cast [mod:ctrl] Envenom",
      },
      PreMacro={
        "/cast [nostealth,nocombat] Stealth",
        "/cast [stealth] Shadowstep",
        "/cast [stealth] Garrote",
      },
        "/cast Mutilate",
        "/cast Kingsbane",
        "/cast Toxic Blade",
        "/cast Garrote",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

Sequences['Papa_sub'] = {
-- This Sequence was exported from GSE 2.2.00.
  Author="Galvet@Draka",
  SpecID=261,
  Talents = "2331131",
  Help = [[WIP]],
  Default=1,
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/cast Symbols of Death",
        "/cast Shadow Blades",
      },
      PreMacro={
        "/cast [nostealth,nocombat] Stealth",
        "/cast Shadowstep",
        "/cast [stealth] Shadowstrike",
      },
        "/castsequence Shadow Dance, Shadowstrike, Shadowstrike",
        "/cast Goremaw's Bite",
        "/castsequence Backstab, Eviscerate, Backstab, Nightblade",
      PostMacro={
      },
      KeyRelease={
      },
    },
  },
}

