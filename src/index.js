require('app-module-path').addPath('.');
const { join } = require('path');
const addon = require('./addon');
const config = require('./config');
const macro = require('./macro');

const backupDir = join('e:', 'projects', 'wow configs');

// macro(backupDir).then(() => config(backupDir)).then(() => addon(backupDir));
macro(backupDir);

// config(backupDir);

// addon(backupDir);
