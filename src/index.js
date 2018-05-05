require('app-module-path').addPath(__dirname);
require('qb-log')('simple');

const tools = ['setup', 'addons', 'config', 'macros'];

const cliOptions = tools.reduce((obj, tool) => Object.assign(obj, {
  [tool]: {
    'default': false,
    type: 'boolean'
  }
}), {
  dir: {
    // 'default': '.',
    'default': require('path').join('e:', 'projects', 'wow configs'),
    type: 'string'
  }
});

const { argv } = require('yargs').options(cliOptions);

const steps = tools
  .filter((tool) => argv[tool])
  .map((tool) => () => require(`./${tool}`)(argv.dir));

require('utils').waterfall(steps);
