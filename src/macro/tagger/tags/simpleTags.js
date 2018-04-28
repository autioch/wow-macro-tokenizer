/* eslint-disable max-len */
const mounts = require('../../../../output/mounts');
const categories = require('./categories');

module.exports = [{
  label: 'Chat',
  tokenTypes: ['chat', 'channel'],
  category: categories.Other
}, {
  label: 'Teleport',
  spellNames: ['Hearthstone'],
  category: categories.Other
}, {
  label: 'Proffesion',
  tokenTypes: ['linkEnchant', 'linkItem', 'linkProfession', 'linkSpell'],
  spellNames: ['Cooking', 'Basic Campfire', 'Archaeology', 'Engineering', 'Jewelcrafting', 'Enchanting', 'Smelting', 'Mining'],
  category: categories.Other
}, {
  label: 'Draenei',
  category: categories.Race,
  spellNames: ['Gift of the Naaru']
}, {
  label: 'Blood Elf',
  category: categories.Race,
  spellNames: ['Arcane Torrent']
}, {
  label: 'Goblin',
  category: categories.Race,
  spellNames: ['Mobile Banking']
}, {
  label: 'Mount',
  spellNames: mounts,
  category: categories.Other
}, {
  label: 'Search',
  spellNames: ['SetRaidTarget'],
  commandNames: ['/tar ', '/who ', '/target'],
  category: categories.Other
}, {
  label: 'Quest',
  spellNames: ['Warts-B-Gone Lip Balm'],
  category: categories.Other
}, {
  label: 'Script',
  commandNames: ['/console', '/run', '/script'],
  spellNames: ['SetCVar'],
  category: categories.Other
}, {
  label: 'Wintergrasp',
  spellNames: ['GetWintergraspWaitTime'],
  category: categories.Other
}];
