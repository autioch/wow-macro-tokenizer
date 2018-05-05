const { setDict, readJson } = require('utils');
const categories = require('./categories');
const { uniq } = require('lodash');

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

module.exports = function getClassTags() {
  return readJson('spells').then((spells) => {
    const spellsDict = spells.reduce((obj, spellGroup) => {
      setDict(obj, spellGroup.category.label, []).push(...spellGroup.spells);

      return obj;
    }, {});

    return Object.keys(spellsDict).map((key) => ({
      label: key,
      rules: [{
        type: ['identifier'],
        value: uniq(spellsDict[key]).sort((a, b) => a.localeCompare(b))
      }],
      category: categories.Class,
      color: colors[key]
    }));
  });
};
