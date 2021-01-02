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
suite('nth()', function () {

    test('undefined, not array', function () {
        expect(useful.nth(undefined)).to.equal(undefined);
    });

    test('empty array', function () {
        expect(useful.nth([])).to.equal(undefined);
    });

    test('one element array, default params', function () {
        expect(useful.nth([1])).to.equal(1);
    });

    test('one element array, nth > arr.length', function () {
        expect(useful.nth([1], 5)).to.equal(undefined);
    });

    test('one element array, nth > arr.length, indexStyle === 1', function () {
        expect(useful.nth([1], 5, 1)).to.equal(undefined);
    });

    test('one element array, nth === 0, indexStyle invalid', function () {
        expect(useful.nth([1], 0, 5)).to.equal(undefined);
    });

    test('one-based index, first element', function () {
        expect(useful.nth([1, 2], 1, 1)).to.equal(1);
    });

    test('one-based index, second element', function () {
        expect(useful.nth([1, 2], 2, 1)).to.equal(2);
    });

    test('zero-based index, first element', function () {
        expect(useful.nth([1, 2], 0, 0)).to.equal(1);
    });

    test('zero-based index, second element', function () {
        expect(useful.nth([1, 2], 1, 0)).to.equal(2);
    });
});
