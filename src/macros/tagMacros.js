const { flattenDeep, flatten, uniq } = require('lodash');

const valueInArray = (value = '', arr) => arr.some((item) => item === value.toLowerCase());

function getTokenTags(token, tags) {
  return tags
    .filter((def) => def.rules.some((rule) => {
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
    }))
    .map((def) => def.id);
}

function setMacroTags(macro, tags) {
  const tokenTags = flattenDeep(macro.lines.map((line) => line.tokens)).map((token) => getTokenTags(token, tags));

  return {
    ...macro,
    tags: uniq(flatten(tokenTags)).sort()
  };
}

module.exports = function tagger(macros, tags) {
  const tagged = macros.map((macro) => setMacroTags(macro, tags));
  const otherTagId = tags[tags.length - 1].id;

  console.log(Array.isArray(tagged));
  tagged
    .filter((macro) => !macro.tags.length)
    .forEach((macro) => {
      macro.tags.push(otherTagId);
    });

  return tagged;
};
