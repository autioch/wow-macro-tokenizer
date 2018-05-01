const categories = require('./categories');

const classTags = require('./classTags');
const gameplay = require('./gameplay');
const other = require('./other');

// const race = require('./race');

function normalizeRule({ type = [], value = [] }) {
  return {
    type: type.map((item) => item.toLowerCase()),
    value: value.map((item) => item.toLowerCase())
  };
}

module.exports = []
  .concat(classTags)
  .concat(gameplay)
  .concat(other)

  // .concat(race)
  .sort((a, b) => a.label.localeCompare(b.label))
  .concat({
    label: 'Other',
    rules: [],
    category: categories.Other
  })
  .map((tag, id) => ({
    ...tag,
    rules: tag.rules.map(normalizeRule),
    id
  }));
