const { singleRun, saveJson } = require('../../utils');
const parseAddon = require('./addon');
const parseRaw = require('./raw');
const Bluebird = require('bluebird');

const customs = [parseAddon, parseRaw];

module.exports = function custom(macros = []) {
  console.log(macros.length);

  return Bluebird
    .map(customs, (fn) => fn())
    .tap(([addon, raw]) => console.log(addon.length, raw.length))
    .then(([addon, raw]) => macros.concat(addon, raw))
    .tap((allMacros) => console.log(allMacros.length))
    .tap((allMacros) => saveJson(allMacros, 'custom'));
};

singleRun(module, 'parser');
