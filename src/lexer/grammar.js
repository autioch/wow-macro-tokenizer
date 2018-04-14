/* eslint no-sync: 0 */
const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = readFileSync(join(__dirname, 'grammar.ne'), 'utf8').trim();
