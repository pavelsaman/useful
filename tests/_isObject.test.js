import { _isObject } from '../modules/_isObject.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('_isObject()', function () {
  test('null is not object', function () {
    expect(_isObject(null)).to.be.false;
  });

  test('undefined is not object', function () {
    expect(_isObject(undefined)).to.be.false;
  });

  test('array is not object', function () {
    expect(_isObject([])).to.be.false;
  });

  test('object with no properties is object', function () {
    expect(_isObject({})).to.be.true;
  });

  test('object with more properties is object', function () {
    expect(_isObject({ a: 1 })).to.be.true;
  });
});
