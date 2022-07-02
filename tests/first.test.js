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
suite('first()', function () {
  test('empty array', function () {
    expect(useful.first([])).to.equal(undefined);
  });

  test('non-empty array, one element', function () {
    expect(useful.first([1])).to.equal(1);
  });

  test('non-empty array, more elements', function () {
    expect(useful.first([1, 2, 3])).to.equal(1);
  });

  test('undefined', function () {
    expect(useful.first(undefined)).to.equal(undefined);
  });

  test('number', function () {
    expect(useful.first(1)).to.equal(undefined);
  });

  test('NaN', function () {
    expect(useful.first(NaN)).to.equal(undefined);
  });

  test('Infinity', function () {
    expect(useful.first(Infinity)).to.equal(undefined);
  });

  test('string', function () {
    expect(useful.first('abc')).to.equal(undefined);
  });

  test('boolean', function () {
    expect(useful.first(true)).to.equal(undefined);
  });

  test('null', function () {
    expect(useful.first(null)).to.equal(undefined);
  });

  test('empty object literal', function () {
    expect(useful.first({})).to.equal(undefined);
  });

  test('non-empty object literal', function () {
    expect(useful.first({ a: 1 })).to.equal(undefined);
  });

  test('function', function () {
    expect(useful.first(function () {})).to.equal(undefined);
  });
});
