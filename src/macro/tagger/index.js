const findTags = require('./findTags');
const { saveJson, singleRun } = require('../../utils');
const tags = require('./tags');
const categories = require('./tags/categories');
const { omit, countBy, flatten } = require('lodash');

function setOccurences(tagged) {
  const counts = countBy(flatten(tagged.map((macro) => macro.tags)));

  tags.forEach((tag) => {
    tag.count = counts[tag.id];
  });
}

module.exports = function tagger(macros) {
  const tagged = macros.map((macro) => findTags(macro));

  const otherTagId = tags[tags.length - 1].id;

  tagged
    .filter((macro) => !macro.tags.length)
    .forEach((macro) => {
      macro.tags.push(otherTagId);
    });

  setOccurences(tagged);

  return saveJson(tagged, 'tagger')
    .then(() => saveJson(tags.map((tag) => omit(tag, ['spellNames', 'tokenTypes'])), 'tags'))
    .then(() => saveJson(categories, 'categories'))
    .then(() => tagged);
};

singleRun(module, 'tokenized.parsed');
