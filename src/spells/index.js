const fetchSpells = require('./fetchSpells');
const parseSpells = require('./parseSpells');
const { saveJson } = require('../utils');
const Bluebird = require('bluebird');
const definitions = require('./definitions');
const qbLog = require('qb-log');
const mounts = require('./mounts');

function getSpells(definition) {
  qbLog.info('FETCH', definition.expansion.label, definition.category.label);

  return fetchSpells(definition.expansion.id, definition.category.id)
    .then((bodyText) => parseSpells(bodyText))
    .then((spells) => ({
      ...definition,
      spells
    }))
    .catch((err) => console.log(err));
}

module.exports = function spells() {
  return Bluebird
    .map(definitions, getSpells, {
      concurrency: 1
    })
    .tap((allSpells) => saveJson(allSpells, 'spells'))
    .tap(() => saveJson(mounts(), 'mounts'));
};
