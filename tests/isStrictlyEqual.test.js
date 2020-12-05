import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('isStrictlyEqual()', function () {

    test('equal arrays', function () {
        expect(useful.isStrictlyEqual([1, 2], [1, 2])).to.equal(true);
    });

    test('same array', function () {
        const arr = [1, 2];
        expect(useful.isStrictlyEqual(arr, arr)).to.equal(true);
    });

    test('different arrays', function () {
        expect(useful.isStrictlyEqual([1, 2], [1, 1])).to.equal(false);
    });

    test('equal but not strictly', function () {
        expect(useful.isStrictlyEqual([1, 2], [1, '2'])).to.equal(false);
    });

    test('arr is undefined', function () {
        expect(useful.isStrictlyEqual(undefined, [1, 2])).to.equal(false);
    });

    test('arr1 is undefined', function () {
        expect(useful.isStrictlyEqual([1, 2], undefined)).to.equal(false);
    });

    test('empty arrays', function () {
        expect(useful.isStrictlyEqual([], [])).to.equal(true);
    });

    test('different lengths', function () {
        expect(useful.isStrictlyEqual([1, 2, 3], [1, 2])).to.equal(false);
    });

    test('arr is object', function () {
        expect(useful.isStrictlyEqual({}, [])).to.equal(false);
    });

    test('arr1 is object', function () {
        expect(useful.isStrictlyEqual([1], {})).to.equal(false);
    });

    test('arr is primitive', function () {
        expect(useful.isStrictlyEqual(1, [1])).to.equal(false);
    });

    test('arr1 is primitive', function () {
        expect(useful.isStrictlyEqual([1], 'g')).to.equal(false);
    });
});
