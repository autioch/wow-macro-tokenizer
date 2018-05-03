module.exports = {
  classNames: [
    'deathknight',
    'demonhunter',
    'druid',
    'hunter',
    'mage',
    'monk',
    'paladin',
    'priest',
    'rogue',
    'shaman',
    'warlock',
    'warrior'
  ],
  raceNames: [
    'bloodelf',
    'draenei',
    'dwarf',
    'gnome',
    'goblin',
    'highmountaintauren',
    'human',
    'lightforgeddraenei',
    'nightborne',
    'nightelf',
    'orc',
    'pandaren',
    'pandaren',
    'pandaren',
    'tauren',
    'troll',
    'scourge',
    'voidelf',
    'worgen'
  ].reduce((arr, item) => arr.concat(`${item}_female`, `${item}_male`), [])
};
