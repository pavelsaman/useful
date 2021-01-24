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
suite('formatMonth()', function () {
    test('return string', function () {
        expect(typeof useful.formatMonth(new Date())).to.equal('string');
    });

    test('return correct month number', function () {
        const month = new Date().getMonth() + 1;
        const paddedMonth = month.toString().padStart(2, '0');
        expect(useful.formatMonth(new Date())).to.equal(paddedMonth);
    });

    test('month undefined', function () {
        expect(useful.formatMonth()).to.equal(undefined);
    });

    test('month null', function () {
        expect(useful.formatMonth(null)).to.equal(undefined);
    });

    test('month primitive', function () {
        expect(useful.formatMonth(1)).to.equal(undefined);
    });

    test('month string', function () {
        expect(useful.formatMonth('1')).to.equal(undefined);
    });

    test('month object', function () {
        expect(useful.formatMonth({})).to.equal(undefined);
    });
});
