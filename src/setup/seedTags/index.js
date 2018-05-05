const categories = require('./categories');
const getClassTags = require('./classes');
const getGameplayTags = require('./gameplay');
const other = require('./other');
const races = require('./races');
const { saveJson } = require('utils');
const Bluebird = require('bluebird');

function parseTags(tags) {
  return tags.map((tag, id) => ({
    ...tag,
    id,
    rules: tag.rules.map(({ type = [], value = [] }) => ({
      type: type.map((item) => item.toLowerCase()),
      value: value.map((item) => item.toLowerCase())
    }))
  }));
}

module.exports = function seedTags() {
  return Bluebird
    .all([getClassTags(), getGameplayTags()])
    .then(([classTags, gameplayTags]) => []
      .concat(classTags)
      .concat(gameplayTags)
      .concat(races)
      .concat(other)
      .sort((a, b) => a.label.localeCompare(b.label))
      .concat({
        label: 'Other',
        rules: [],
        category: categories.Other
      }))
    .then((tags) => parseTags(tags))
    .then((tags) => saveJson(tags, 'tags'))
    .then(() => saveJson(categories, 'tagCategories'));
};
