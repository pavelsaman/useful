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
suite('isEqual()', function () {
  test('different arrays', function () {
    expect(useful.isEqual([1, 2], [1, 2])).to.equal(true);
  });

  test('equal', function () {
    expect(useful.isEqual([1, 2], [1, '2'])).to.equal(true);
  });
});
