/* TODO Tried using lua2js and/ore luaparse, but none of them seem to work properly in this case. */
const luaParse = require('luaparse');

const IGNORED_STARTS = [
  '--',
  'Author =',
  'Author=',
  'SpecID =',
  'SpecID=',
  'Talents =',
  'Talents=',
  'Default=',
  'Default ='
];

module.exports = function parseLua(fileContents) {
  const lines = fileContents
    .split('\n')
    .slice(1)
    .map((line) => line.trim())
    .filter((line) => IGNORED_STARTS.every((start) => !line.startsWith(start)))
    .filter((line) => !!line)
    .join('\n');

  const ast = luaParse
    .parse(lines).body
    .map((statement) => statement.init[0])
    .reduce((arr, statement) => arr.concat(statement.fields), [])
    .filter((field) => field.key.name !== 'Help')
    .map((statement) => statement.value.fields.map((field) => field.value));

  // console.log(ast.map((stat) => stat.type).join(', '));

  return ast;
};
