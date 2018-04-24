const { uniq } = require('lodash');
const cheerio = require('cheerio');
const qbLog = require('qb-log');

function extractScriptText(bodyText) {
  const $ = cheerio.load(bodyText); // eslint-disable-line id-length

  return $('#main-contents > script').html().trim();
}

function parseSpellsText(scriptText) {
  const startIndex = scriptText.indexOf(',data:[');
  const spellsText = scriptText.slice(startIndex + 6, -3); // eslint-disable-line no-magic-numbers

  const spellsJSON = spellsText
    .replace(/({|,)([a-z]+):/gi, (match, prefix, key) => `${prefix}"${key}":`) // eslint-disable-line no-unused-vars
    .replace(/'/g, '"');

  return JSON.parse(spellsJSON);
}

function cleanupSpellName(spellName) {
  return spellName.replace(/\([^)]+\)/g, '').trim();
}

function cleanupSpells(spells) {
  const spellNames = spells.map((spell) => cleanupSpellName(spell.name));
  const uniqSpellNames = uniq(spellNames);

  qbLog.info('SPELL CLEANUP', uniqSpellNames.length, 'out of', spellNames.length);

  return uniqSpellNames.sort((a, b) => a.localeCompare(b));
}

const parsers = [
  extractScriptText,
  parseSpellsText,
  cleanupSpells
];

module.exports = function parseSpells(bodyText) {
  return parsers.reduce((result, parser) => parser(result), bodyText);
};
