/* eslint-disable no-use-before-define */
const { findFiles, readFile, macroFactory } = require('utils');
const { flattenDeep } = require('lodash');
const luaParse = require('luaparse');

const OPS = {
  StringLiteral: (field) => field.value,
  IndexExpression: (field) => field.index.value,
  BinaryExpression: (field) => parseText(field.left) + parseText(field.right)
};

function parseText(field) {
  if (OPS[field.type]) {
    return OPS[field.type](field);
  }

  throw Error(`Failed to parse text ${JSON.stringify(field)}`);
}

const findValue = (field, value) => field.value.fields.find((item) => item.key.value === value).value;

function parseLua(fileContents) {
  const lines = fileContents
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => !line.startsWith('--'))
    .filter((line) => !!line)
    .slice(1)
    .join('\n');

  return luaParse
    .parse(lines).body[0].init[0].fields
    .map((field) => macroFactory({
      label: parseText(findValue(field, 'name')),
      lines: parseText(findValue(field, 'macro')).split('\n').map((line) => line.trim())
    }));
}

module.exports = () => findFiles(__dirname, '*.lua')
  .map((fileName) => readFile(fileName))
  .map(({ fileContents }) => parseLua(fileContents))
  .then((parsedFiles) => flattenDeep(parsedFiles));
