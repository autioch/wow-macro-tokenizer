/* eslint-disable max-len */
const categories = require('./categories');

module.exports = [{
  label: 'Chat',
  rules: [{
    type: ['chat', 'channel']
  }, {
    value: ['SendChatMessage', 'GetChannelName']
  }],
  category: categories.Other
}, {
  label: 'Profession',
  rules: [{
    type: ['linkEnchant', 'linkProfession', 'linkSpell']
  }, {
    value: ['Cooking', 'Basic Campfire', 'Archaeology', 'Engineering', 'Jewelcrafting', 'Enchanting', 'Smelting', 'Mining', 'Mining Skills', 'Disenchant', 'Prospecting']
  }],
  category: categories.Other
}, {
  label: 'Script & Config',
  rules: [{
    value: ['SetCVar', 'CombatLogClearEntries']
  }, {
    value: ['/console', '/run']
  }],
  category: categories.Other
}];
