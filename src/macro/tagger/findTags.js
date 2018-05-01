/* eslint id-blacklist: 0 */
const { flattenDeep, flatten, uniq } = require('lodash');
const tags = require('./tags');

const valueInArray = (value = '', arr) => arr.some((item) => item === value.toLowerCase());

function isTokenMatchingRule(token, rule) {
  const { type, value } = rule;

  if (type.length && value.length) {
    return valueInArray(token.type, type) && valueInArray(token.value, value);
  }

  if (type.length) {
    return valueInArray(token.type, type);
  }

  if (value.length) {
    return valueInArray(token.value, value);
  }

  return false;
}

function getTokenTags(token) {
  return tags
    .filter((def) => def.rules.some((rule) => isTokenMatchingRule(token, rule)))
    .map((def) => def.id);
}

module.exports = function findTags(macro) {
  const tokenTags = flattenDeep(macro.lines.map((line) => line.tokens)).map((token) => getTokenTags(token));

  // if (macro.lines.some((line) => line.grammar)) {
  //   tokenTags.push(tags.find((tag) => tag.label === 'Script & Config').id);
  // }

  return {
    ...macro,
    tags: uniq(flatten(tokenTags)).sort()
  };
};
