/* eslint-disable max-len */
const categories = require('./categories');

module.exports = [{
  label: 'Draenei',
  category: categories.Race,
  rules: [{
    value: ['Gift of the Naaru']
  }]
}, {
  label: 'Blood Elf',
  category: categories.Race,
  rules: [{
    value: ['Arcane Torrent']
  }]
}, {
  label: 'Goblin',
  category: categories.Race,
  rules: [{
    value: ['Mobile Banking', 'Pack Hobgoblin']
  }]
}];
