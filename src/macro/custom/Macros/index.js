const { findFiles, readFile, saveJson } = require('../../../utils');
const parseLua = require('./parseLua');

const here = __dirname;
const MACRO_FILE = '*.lua';

findFiles(here, MACRO_FILE)
  .map((fileName) => readFile(fileName).then(({ fileContents }) => parseLua(fileContents)))
  .then((parsedFiles) => parsedFiles.reduce((arr, file) => arr.concat(file), []))
  .tap((arr) => saveJson(arr, 'custom.macros.lua'));
