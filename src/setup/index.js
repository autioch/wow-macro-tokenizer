module.exports = function setup() {
  require('qb-log').info('setup');

  return require('utils').waterfall([
    require('./defaultMacros'),
    require('./downloadIcons'),
    require('./downloadSpells'),
    require('./seedTags')
  ]);
};
