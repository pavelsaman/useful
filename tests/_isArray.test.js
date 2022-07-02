import { _isArray } from '../modules/_isArray.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('_isArray()', function () {
  test('typeof', function () {
    expect(typeof _isArray([])).to.equal('boolean');
  });

  test('returns true for array', function () {
    expect(_isArray([])).to.equal(true);
  });

  test('returns false for not array', function () {
    expect(_isArray({})).to.equal(false);
  });
});
