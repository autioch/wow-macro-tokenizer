const { readFileSync } = require('fs');
const { join } = require('path');
const { Parser, Grammar } = require('nearley');
const compile = require('nearley/lib/compile');
const generate = require('nearley/lib/generate');
const nearleyGrammar = require('nearley/lib/nearley-language-bootstrapped');

const macroSource = readFileSync(join(__dirname, 'macro', 'grammar.ne'), 'utf8').trim();
const genericSource = readFileSync(join(__dirname, 'macro', 'generic.ne'), 'utf8').trim();
const luaSource = readFileSync(join(__dirname, 'lua', 'grammar.ne'), 'utf8').trim();

function sourceToScript(sourceCode) {
  // Parse the grammar source into an AST
  const grammarParser = new Parser(nearleyGrammar);

  const { results: [grammarAst] } = grammarParser.feed(sourceCode); // TODO check for errors
  const grammarInfoObject = compile(grammarAst, {}); // Compile the AST into a set of rules

  return generate(grammarInfoObject, 'grammar'); // Generate JavaScript code from the rules
}

function sourceToJS(grammarJs) {
  const module = { // eslint-disable-line no-shadow
    exports: {}
  };

  eval(grammarJs); // eslint-disable-line no-eval

  return Grammar.fromCompiled(module.exports);
}

function compileGrammar(sourceCode) {
  const grammarJs = sourceToScript(sourceCode);

  return sourceToJS(grammarJs);
}

module.exports = {
  luaGrammar: compileGrammar(luaSource),
  genericGrammar: compileGrammar(genericSource),
  macroGrammar: compileGrammar(macroSource)
};
