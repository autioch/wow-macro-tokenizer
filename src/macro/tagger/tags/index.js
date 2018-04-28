const categories = require('./categories');

const classTags = require('./classTags');
const gameplay = require('./gameplay');
const other = require('./other');
const race = require('./race');

module.exports = []
  .concat(classTags)
  .concat(gameplay)
  .concat(other)
  .concat(race)
  .sort((a, b) => a.label.localeCompare(b.label))
  .concat({
    label: 'Other',
    category: categories.Other
  })
  .map((tag, id) => ({
    ...tag,
    id
  }));
