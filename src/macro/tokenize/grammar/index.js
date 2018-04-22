const { readFileSync } = require('fs');
const { join } = require('path');
const compileGrammar = require('./compileGrammar');

const source = readFileSync(join(__dirname, 'simple.ne'), 'utf8').trim();

module.exports = compileGrammar(source);
