/* eslint-disable max-len */
const categories = require('./categories');

module.exports = [{
  label: 'Chat',
  tokenTypes: ['chat', 'channel'],
  spellNames: ['SendChatMessage', 'GetChannelName'],
  category: categories.Other
}, {
  label: 'Profession',
  tokenTypes: ['linkEnchant', 'linkProfession', 'linkSpell'],
  spellNames: ['Cooking', 'Basic Campfire', 'Archaeology', 'Engineering', 'Jewelcrafting', 'Enchanting', 'Smelting', 'Mining', 'Mining Skills', 'Disenchant', 'Prospecting'],
  category: categories.Other
}, {
  label: 'Script & Config',
  commandNames: ['/console', '/run'],
  spellNames: ['SetCVar'],
  category: categories.Other
}, {
  label: 'Wintergrasp',
  spellNames: ['GetWintergraspWaitTime'],
  category: categories.Other
}, {
  label: 'Server',
  tokenTypes: ['server'],
  category: categories.Other
}];
