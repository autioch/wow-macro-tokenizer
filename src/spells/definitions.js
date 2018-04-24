/* eslint-disable no-magic-numbers */
const expansions = [{
  label: 'Vanilla',
  id: 'vanilla'
}, {
  label: 'The Burning Crusade',
  id: 'tbc'
}, {
  label: 'Wrath of the Lich King',
  id: 'wotlk'
}, {
  label: 'Cataclysm',
  id: 'cata'
}];

const categories = [{
  label: 'Death Knight',
  id: '7.6'
}, {
  label: 'Druid',
  id: '7.11'
}, {
  label: 'Hunter',
  id: '7.3'
}, {
  label: 'Mage',
  id: '7.8'
}, {
  label: 'Paladin',
  id: '7.2'
}, {
  label: 'Priest',
  id: '7.5'
}, {
  label: 'Rogue',
  id: '7.4'
}, {
  label: 'Shaman',
  id: '7.7'
}, {
  label: 'Warlock',
  id: '7.9'
}, {
  label: 'Warrior',
  id: '7.1'
}].sort((a, b) => a.id.localeCompare(b.id));

function buildDefinition(expansion, category) {
  return {
    expansion,
    category
  };
}

module.exports = expansions
  .reduce((defs, expansion) => defs.concat(categories.map((category) => buildDefinition(expansion, category))), []);
