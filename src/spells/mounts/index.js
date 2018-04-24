const { uniq } = require('lodash');

/* Ripped from wowhead :( */
const two = require('./two');
const three = require('./three');
const four = require('./four');

module.exports = function mounts() {
  const twos = Object.values(two).map((spell) => spell.name_enus);
  const threes = Object.values(three).map((spell) => spell.name_enus);
  const fours = four.map((spell) => spell.name.slice(1));
  const all = [].concat(twos, threes, fours).filter((mount) => !!mount);
  const unique = uniq(all).sort((a, b) => a.localeCompare(b));

  return unique;
};
