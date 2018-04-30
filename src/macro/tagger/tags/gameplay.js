/* eslint-disable max-len */
const { join } = require('path');
const { outputRoot } = require('../../../utils');
const mounts = require(join(outputRoot, 'mounts'));
const categories = require('./categories');

module.exports = [{
  label: 'Teleport',
  identifiers: [
    'Death Gate', 'Hearthstone', 'Dalaran Hearthstone', 'Garrison Hearthstone', 'Wormhole Generator: Northrend',
    'Wormhole Generator: Pandaria', 'Admiral\'s Compass', 'Argent Crusader\'s Tabard'
  ],
  category: categories.Gameplay
}, {
  label: 'Mount',
  identifiers: mounts,
  commandNames: ['/dismount'],
  category: categories.Gameplay
}, {
  label: 'Search & Target',
  identifiers: ['SetRaidTarget'],
  commandNames: ['/tar', '/who', '/target', '/focus'],
  category: categories.Gameplay
}, {
  label: 'Quest',
  identifiers: ['Warts-B-Gone Lip Balm'],
  category: categories.Gameplay
}, {
  label: 'Equipment',
  commandNames: ['/equip', '/equipslot', 'linkItem', '/use'],
  category: categories.Gameplay
}, {
  label: 'Emote',
  tokenTypes: ['emote'],
  category: categories.Other
}, {
  label: 'Party',
  commandNames: ['/follow', '/inv', '/invite', '/petfollow', '/promote'],
  identifiers: ['LeaveParty'],
  category: categories.Gameplay
}];
