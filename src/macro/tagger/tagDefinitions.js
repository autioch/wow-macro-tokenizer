/* eslint no-magic-numbers: 0 */
const tagCategories = require('./tagCategories');

const TAGS = tagCategories.reduce((dict, { label, id }) => ({
  [label]: id,
  ...dict
}), {});

module.exports = [{
  id: 1,
  label: 'Hearthstone',
  category: TAGS.General,
  keywords: ['Hearthstone']
}, {
  id: 2,
  label: 'Proffesions',
  category: TAGS.General,
  keywords: [
    'Cooking', 'Basic Campfire', 'Htrade', 'Hitem', 'Hspell', 'GetTradeSkillListLink', 'Archaeology',
    'Engineering', 'Jewelcrafting', 'Enchanting', 'Smelting', 'Mining'
  ]
}, {
  id: 3,
  label: 'Chat',
  category: TAGS.General,
  keywords: [
    '/g ', '/o ', '/rw ', '/ra ', '/r ', '/p ', '/s ', '/y ', '/yell ', '/w ',
    '/1 ', '/2 ', '/3 ', '/4 ', '/5 ', '/6 ', '/7 ', '/8 ', '/9 '
  ]
}, {
  id: 4,
  label: 'Mount',
  category: TAGS.General,
  keywords: ['flyable', 'noflyable', 'nomounted', 'mounted']
}, {
  id: 5,
  label: 'Searching',
  category: TAGS.General,
  keywords: ['SetRaidTarget', '/tar ', '/who ', '/target']
}, {
  id: 6,
  label: 'Quest',
  category: TAGS.General,
  keywords: ['Warts-B-Gone Lip Balm']
}, {
  id: 7,
  label: 'Scripting',
  category: TAGS.Other,
  keywords: ['/console', '/run', 'SetCVar']
}, {
  id: 8,
  label: 'Wintegrasp',
  category: TAGS.Other,
  keywords: ['GetWintergraspWaitTime']
}, {
  id: 10,
  label: 'Priest',
  category: TAGS.Class,
  keywords: [
    'Mind Flay', 'Mind Blast', 'Shadow Word', 'Devouring Plague', 'Psychic Scream', 'Dispel Magic', 'Silence',
    'Psychic Horror', 'Shadowfiend', 'Abolish Disease', 'Dispersion', 'Vampiric Touch', 'Power Word',
    'Shackle Undead', 'Archangel', 'Resurrection', 'Dispel magic'
  ],
  color: '#FFFFFF'
}, {
  id: 11,
  label: 'Paladin',
  category: TAGS.Class,
  keywords: [
    'Judgment', 'Judgement ', 'Blessing of ', 'Hand of ', 'Hammer of Wrath', 'Sacred Shield', 'Cleanse', 'Turn Evil',
    'Divine Storm', 'Crusader Strike', 'Flash of Light', 'Avenging Wrath', 'Hammer of Justice', 'Repentance',
    'Divine Shield', 'Shield of the Righteous', 'Hammer of the Righteous', 'Redemption'
  ],
  color: '#F58CBA'
}, {
  id: 12,
  label: 'Rogue',
  category: TAGS.Class,
  keywords: ['Eviscerate', 'Sinister Strike', 'Mutilate', 'Deadly Poison'],
  color: '#FFF569'
}, {
  id: 13,
  label: 'Death Knight',
  category: TAGS.Class,
  keywords: [
    'Chains of Ice', 'Obliterate', 'Rune Strike', 'Unholy Presence', 'Frost Presence', 'Heart Strike', 'Bone Shield',
    'Raise Dead', 'Dancing Rune Weapon', 'Summon Gargoyle', 'Pestilence', 'Leap', 'Huddle', 'Cower'
  ],
  color: '#C41F3B'
}, {
  id: 14,
  label: 'Druid',
  category: TAGS.Class,
  keywords: [
    'Ferocious Bite', 'Cyclone', 'Entangling Roots', 'Mangle', 'Faerie Fire', 'Hibernate', 'Innervate',
    'Tiger\'s Fury', 'Survival Instincts', 'Revive', 'Stampeding Roar'
  ],
  color: '#FF7D0A'
}, {
  id: 15,
  label: 'Shaman',
  category: TAGS.Class,
  keywords: [
    'Flame Shock', 'Wind Shear', 'Cure Toxins', 'Stormstrike', 'Lava Lash', 'Shamanistic Rage', 'Hex',
    'Feral Spirit', 'Elemental Mastery', 'Grounding Totem', 'Healing Wave', 'Tremor Totem', 'Ancestral Spirit'
  ],
  color: '#0070DE'
}, {
  id: 16,
  label: 'Mage',
  category: TAGS.Class,
  keywords: [
    'Ice Block', 'Polymorph', 'Counterspell', 'Water Jet', 'Frostbolt', 'Conjure', 'Presence of Mind',
    'Freeze', 'Icy Veins', 'Blink', 'Cone of Cold'
  ],
  color: '#69CCF0'
}, {
  id: 17,
  label: 'Hunter',
  category: TAGS.Class,
  keywords: [
    'Feed Pet', 'Mend Pet', 'Revive Pet', 'Arcane Shot', 'Serpent Sting', 'Deterrence',
    'Master\'s Call', 'Aspect of ', 'Rapid Fire', 'Scatter Shot', 'Silencing Shot', 'Mongoose Bite'
  ],
  color: '#ABD473'
}, {
  id: 18,
  label: 'Warrior',
  category: TAGS.Class,
  keywords: [
    'Mortal Strike', 'Berserker Stance', 'Defensive Stance', 'Intercept', 'Battle Stance', 'Rend', 'Bloodrage',
    'Bladestorm', 'Devastate', 'Shield Slam', 'Shield Bash', 'Heroic Throw', 'Misdirection',
    'Enraged Regeneration', 'Berserk'
  ],
  color: '#C79C6E'
}, {
  id: 19,
  label: 'Warlock',
  category: TAGS.Class,
  keywords: [
    'Curse of Weakness', 'Summon Imp', 'Summon Voidwalker', 'Create Firestone', 'Create Spellstone', 'Create Soulstone',
    'Devour Magic', 'Drain Mana', 'Demonic Circle', 'Fel Armor', 'Seduction', 'Healthstone', 'Drain Life',
    'Death Coil', 'Unstable Affliction', 'Fear', 'Shadow Bolt', 'Corruption', 'Ritual of Summoning'
  ],
  color: '#9482C9'
}, {
  id: 20,
  label: 'Draenei',
  category: TAGS.Race,
  keywords: [
    'Gift of the Naaru'
  ]
}, {
  id: 21,
  label: 'Blood Elf',
  category: TAGS.Race,
  keywords: [
    'Arcane Torrent'
  ]
}, {
  id: 22,
  label: 'Goblin',
  category: TAGS.Race,
  keywords: [
    'Mobile Banking'
  ]
}];
