/* eslint no-sync: 0 */
const { readFileSync } = require('fs');
const { join } = require('path');

// const NAME = 'anything';
// const NAME = 'complex';
// const NAME = 'ebnf';
const NAME = 'simple';

module.exports = readFileSync(join(__dirname, 'grammars', `${NAME}.ne`), 'utf8').trim();
