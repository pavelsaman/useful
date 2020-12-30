import _isOneDigit from '../modules/_isOneDigit.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('_isOneDigit()', function () {

    test('not number', function () {
        expect(_isOneDigit('a')).to.equal(undefined);
    });

    test('lower boundary -11', function () {
        expect(_isOneDigit(-11)).to.equal(false);
    });

    test('lower boundary -10', function () {
        expect(_isOneDigit(-10)).to.equal(false);
    });

    test('lower boundary -9', function () {
        expect(_isOneDigit(-9)).to.equal(true);
    });

    test('upper boundary 11', function () {
        expect(_isOneDigit(11)).to.equal(false);
    });

    test('upper boundary 10', function () {
        expect(_isOneDigit(10)).to.equal(false);
    });

    test('upper boundary 9', function () {
        expect(_isOneDigit(9)).to.equal(true);
    });
});
