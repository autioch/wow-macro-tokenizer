/* eslint-env mocha */
// const { expect } = require('chai');
const tokenize = require('./tokenize');
const examples = require('../../input/lines.json');

const failed = examples.filter((example) => {
  const result = tokenize(example);

  if (!result.length) {
    console.log(example);
  }

  return !result.length;

  // it(`${example}`, () => {
  // expect(tokenize(example).length).to.not.equal(0);
  // });
});

console.log(examples.length, failed.length);
