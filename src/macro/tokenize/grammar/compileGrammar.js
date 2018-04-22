const { Parser, Grammar } = require('nearley');
const compile = require('nearley/lib/compile');
const generate = require('nearley/lib/generate');
const nearleyGrammar = require('nearley/lib/nearley-language-bootstrapped');

function sourceToScript(sourceCode) {
  // Parse the grammar source into an AST
  const grammarParser = new Parser(nearleyGrammar);

  const { results: [grammarAst] } = grammarParser.feed(sourceCode); // TODO check for errors
  const grammarInfoObject = compile(grammarAst, {}); // Compile the AST into a set of rules

  return generate(grammarInfoObject, 'grammar'); // Generate JavaScript code from the rules
}

function scriptToJs(grammarJs) {
  const module = { // eslint-disable-line no-shadow
    exports: {}
  };

  eval(grammarJs); // eslint-disable-line no-eval

  return Grammar.fromCompiled(module.exports);
}

module.exports = function compileGrammar(sourceCode) {
  const grammarJs = sourceToScript(sourceCode);

  return scriptToJs(grammarJs);
};
