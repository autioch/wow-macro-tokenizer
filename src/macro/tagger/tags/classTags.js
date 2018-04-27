const spells = require('../../../../output/spells');
const categories = require('./categories');
const { uniq } = require('lodash');

const spellsDict = spells.reduce((obj, { category: { label }, spells: spellList }) => {
  if (obj[label]) {
    obj[label].push(...spellList);
  } else {
    obj[label] = [];
  }

  return obj;
}, {});

const colors = {
  Warrior: '#C79C6E',
  Hunter: '#ABD473',
  Mage: '#69CCF0',
  Warlock: '#9482C9',
  Shaman: '#0070DE',
  Priest: '#FFFFFF',
  Druid: '#FF7D0A',
  'Death Knight': '#C41F3B',
  Paladin: '#F58CBA',
  Rogue: '#FFF569'
};

module.exports = Object.keys(spellsDict).map((key) => ({
  label: key,
  spellNames: uniq(spellsDict[key]).sort((a, b) => a.localeCompare(b)),
  category: categories.Class,
  color: colors[key]
}));
