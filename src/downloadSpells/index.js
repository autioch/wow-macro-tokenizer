const Bluebird = require('bluebird');
const { uniq } = require('lodash');
const cheerio = require('cheerio');
const request = require('request');
const { saveJson } = require('utils');
const definitions = require('./definitions');
const mounts = require('./mounts.json');
const qbLog = require('qb-log');

function parseBodyText(definition, bodyText) {
  const $ = cheerio.load(bodyText); // eslint-disable-line id-length

  const scriptText = $('#main-contents > script').html().trim();
  const startIndex = scriptText.indexOf(',data:[');
  const spellsText = scriptText.slice(startIndex + 6, -3); // eslint-disable-line no-magic-numbers

  const spellsJSON = spellsText
    .replace(/({|,)([a-z]+):/gi, (match, prefix, key) => `${prefix}"${key}":`) // eslint-disable-line no-unused-vars
    .replace(/'/g, '"');

  const spellNames = JSON.parse(spellsJSON).map((spell) => spell.name.replace(/\([^)]+\)/g, '').trim());

  return {
    ...definition,
    spells: uniq(spellNames).sort((a, b) => a.localeCompare(b))
  };
}

function fetchSpellsPage(expansion, categoryId) {
  const uri = `https://${expansion}-twinhead.twinstar.cz/?spells=${categoryId}`;

  qbLog.info('FETCH', uri);

  return new Bluebird((resolve, reject) => request({
    uri
  }, (err, response, body) => {
    qbLog.info('FETCH DONE', uri);
    if (err) {
      reject(err.message);
    } else if (response.status < 200 || response.status > 299) { // eslint-disable-line no-magic-numbers
      reject(`Invalid response status ${response.status} ${uri}`);
    } else if (body.length) {
      resolve(body);
    } else {
      reject(`Missing body for ${uri}`);
    }
  }));
}

function getSpells(definition) {
  return fetchSpellsPage(definition.expansion.id, definition.category.id)
    .then((bodyText) => parseBodyText(definition, bodyText));
}

module.exports = function downloadSpells() {
  return Bluebird
    .map(definitions, getSpells, {
      concurrency: 1
    })
    .tap((allSpells) => saveJson(allSpells, 'spells'))
    .tap(() => saveJson(mounts, 'mounts'));
};
