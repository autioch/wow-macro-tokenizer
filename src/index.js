require('app-module-path').addPath('.');

const Bluebird = require('bluebird');
const qbLog = require('qb-log')('simple');

// const { join } = require('path');
// const addon = require('./addon');
// const config = require('./config');
// const macro = require('./macro');

// const backupDir = join('e:', 'projects', 'wow configs');

// macro(backupDir).then(() => config(backupDir)).then(() => addon(backupDir));
// macro(backupDir);

// config(backupDir);

// addon(backupDir);

const downloadIcons = require('./downloadIcons');
const downloadSpells = require('./downloadSpells');
const summarizeAddons = require('./summarizeAddons');
const summarizeConfig = require('./summarizeConfig');

return [
  downloadIcons,
  downloadSpells

  // summarizeAddons,
  // summarizeConfig
]
  .reduce((prevPromise, step) => prevPromise.then(step), Bluebird.resolve())
  .catch((err) => qbLog.error(err.message));
