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
suite('last()', function () {

    test('empty array', function () {
        expect(useful.last([])).to.equal(undefined);
    });

    test('non-empty array, one element', function () {
        expect(useful.last([1])).to.equal(1);
    });

    test('non-empty array, more elements', function () {
        expect(useful.last([1, 2, 3])).to.equal(3);
    });

    test('undefined', function () {
        expect(useful.last(undefined)).to.equal(undefined);
    });

    test('number', function () {
        expect(useful.last(1)).to.equal(undefined);
    });

    test('NaN', function () {
        expect(useful.last(NaN)).to.equal(undefined);
    });

    test('Infinity', function () {
        expect(useful.last(Infinity)).to.equal(undefined);
    });

    test('string', function () {
        expect(useful.last('abc')).to.equal(undefined);
    });

    test('boolean', function () {
        expect(useful.last(true)).to.equal(undefined);
    });

    test('null', function () {
        expect(useful.last(null)).to.equal(undefined);
    });

    test('empty object literal', function () {
        expect(useful.last({})).to.equal(undefined);
    });

    test('non-empty object literal', function () {
        expect(useful.last({ a: 1 })).to.equal(undefined);
    });

    test('function', function () {
        expect(useful.last(function () { })).to.equal(undefined);
    });
});
