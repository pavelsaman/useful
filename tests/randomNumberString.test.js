import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('randomNumberString()', function () {

    test('default', function () {
        expect(useful.randomNumberString()).to.match(/^[0-9]{10}$/);
    });

    test('custom length', function () {
        expect(useful.randomNumberString(10, '012')).to.match(/^[012]{10}$/);
    });

    test('default alphabet', function () {
        expect(useful.randomNumberString(10)).to.match(/^[0-9]{10}$/);
    });

    test('custom alphabet', function () {
        expect(useful.randomNumberString(10, '567')).to.match(/^[567]{10}$/);
    });

    test('alphabet undefined', function () {
        expect(useful.randomNumberString(10, undefined))
            .to.match(/^[0-9]{10}$/);
    });

    test('alphabet null', function () {
        expect(useful.randomNumberString(10, null)).to.match(/^[0-9]{10}$/);
    });

    test('alphabet object', function () {
        expect(useful.randomNumberString(10, [])).to.match(/^[0-9]{10}$/);
    });

    test('length undefined', function () {
        expect(useful.randomNumberString(undefined, '234'))
            .to.match(/^[234]{10}$/);
    });

    test('length null', function () {
        expect(useful.randomNumberString(null, '234')).to.match(/^[234]{10}$/);
    });

    test('length object', function () {
        expect(useful.randomNumberString({}, '234')).to.match(/^[234]{10}$/);
    });

    test('length 0', function () {
        expect(useful.randomNumberString(0, '234')).to.equal('');
    });

    test('length 1', function () {
        expect(useful.randomNumberString(1, '234')).to.match(/^[234]{1}$/);
    });

    test('length 1000', function () {
        expect(useful.randomNumberString(1000, '2346'))
            .to.match(/^[2346]{1000}$/);
    });
});
