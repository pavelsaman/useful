import useful from '../index.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('formatDay()', function () {
  test('return string', function () {
    expect(typeof useful.formatDay(new Date())).to.equal('string');
  });

  test('return correct format', function () {
    const date = new Date('2020-01-01');
    expect(useful.formatDay(date)).to.match(/[0-9]{2}/);
  });

  test('month undefined', function () {
    expect(useful.formatDay()).to.equal(undefined);
  });

  test('month null', function () {
    expect(useful.formatDay(null)).to.equal(undefined);
  });

  test('month primitive', function () {
    expect(useful.formatDay(1)).to.equal(undefined);
  });

  test('month string', function () {
    expect(useful.formatDay('1')).to.equal(undefined);
  });

  test('month object', function () {
    expect(useful.formatDay({})).to.equal(undefined);
  });
});
