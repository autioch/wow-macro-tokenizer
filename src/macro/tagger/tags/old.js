/* eslint no-magic-numbers: 0 */
const tagCategories = require('./tagCategories');

const TAGS = tagCategories.reduce((dict, { label, id }) => ({
  [label]: id,
  ...dict
}), {});

module.exports = [{
  id: 4,
  label: 'Mount',
  category: TAGS.General,
  keywords: ['flyable', 'noflyable', 'nomounted', 'mounted']
}, {
  id: 5,
  label: 'Searching',
  category: TAGS.General,
  keywords: ['SetRaidTarget', '/tar ', '/who ', '/target']
}, {
  id: 6,
  label: 'Quest',
  category: TAGS.General,
  keywords: ['Warts-B-Gone Lip Balm']
}, {
  id: 7,
  label: 'Scripting',
  category: TAGS.Other,
  keywords: ['/console', '/run', 'SetCVar']
}, {
  id: 8,
  label: 'Wintegrasp',
  category: TAGS.Other,
  keywords: ['GetWintergraspWaitTime']
}];
