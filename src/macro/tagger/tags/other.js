/* eslint-disable max-len */
const categories = require('./categories');

module.exports = [{
  label: 'Chat',
  tokenTypes: ['chat', 'channel'],
  identifiers: ['SendChatMessage', 'GetChannelName'],
  category: categories.Other
}, {
  label: 'Profession',
  tokenTypes: ['linkEnchant', 'linkProfession', 'linkSpell'],
  identifiers: ['Cooking', 'Basic Campfire', 'Archaeology', 'Engineering', 'Jewelcrafting', 'Enchanting', 'Smelting', 'Mining', 'Mining Skills', 'Disenchant', 'Prospecting'],
  category: categories.Other
}, {
  label: 'Script & Config',
  commandNames: ['/console', '/run'],
  identifiers: ['SetCVar'],
  category: categories.Other
}, {
  label: 'Wintergrasp',
  identifiers: ['GetWintergraspWaitTime'],
  category: categories.Other
}, {
  label: 'Server',
  tokenTypes: ['server'],
  category: categories.Other
}];
