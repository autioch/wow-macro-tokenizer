/* eslint-disable max-len */
const { join } = require('path');
const { outputRoot } = require('../../../utils');
const mounts = require(join(outputRoot, 'mounts'));
const categories = require('./categories');

module.exports = [{
  label: 'Teleport',
  rules: [{
    value: [
      'Death Gate', 'Hearthstone', 'Dalaran Hearthstone', 'Garrison Hearthstone', 'Wormhole Generator: Northrend',
      'Wormhole Generator: Pandaria', 'Admiral\'s Compass', 'Argent Crusader\'s Tabard'
    ]
  }],
  category: categories.Gameplay
}, {
  label: 'Mount',
  rules: [{
    value: mounts
  }, {
    value: ['/dismount']
  }],
  category: categories.Gameplay
}, {
  label: 'Search & Target',
  rules: [{
    value: ['SetRaidTarget']
  }, {
    value: ['/tar', '/who', '/target', '/focus']
  }],
  category: categories.Gameplay
}, {
  label: 'Quest',
  rules: [{
    value: ['Warts-B-Gone Lip Balm', 'Nexus Drake Hatchling']
  }],
  category: categories.Gameplay
}, {
  label: 'Equipment',
  rules: [{
    value: ['/equip', '/equipslot', 'linkItem', '/use']
  }],
  category: categories.Gameplay
}, {
  label: 'Emote',
  rules: [{
    type: ['emote']
  }],
  category: categories.Other
}, {
  label: 'Party',
  rules: [{
    value: ['/follow', '/inv', '/invite', '/petfollow', '/promote']
  }, {
    value: ['LeaveParty']
  }],
  category: categories.Gameplay
}];
