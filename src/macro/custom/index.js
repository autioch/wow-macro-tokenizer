const { singleRun, saveJson } = require('../../utils');
const parseAddon = require('./addon');
const parseRaw = require('./raw');
const Bluebird = require('bluebird');

const customs = [parseAddon, parseRaw];

module.exports = function custom(macros = []) {
  return Bluebird
    .map(customs, (fn) => fn())
    .then(([addon, raw]) => macros.concat(addon, raw))
    .tap((allMacros) => saveJson(allMacros, 'custom'));
};

singleRun(module, 'parser');
