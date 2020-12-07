import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('randomString()', function () {

    test('default', function () {
        expect(useful.randomString()).to.match(/^[a-zA-Z]{10}$/);
    });

    test('custom length', function () {
        expect(useful.randomString(10, 'abc')).to.match(/^[a-zA-Z]{10}$/);
    });

    test('default alphabet', function () {
        expect(useful.randomString(10)).to.match(/^[a-zA-Z]{10}$/);
    });

    test('custom alphabet', function () {
        expect(useful.randomString(10, 'abc')).to.match(/^[abc]{10}$/);
    });

    test('alphabet undefined', function () {
        expect(useful.randomString(10, undefined)).to.match(/^[a-zA-Z]{10}$/);
    });

    test('alphabet null', function () {
        expect(useful.randomString(10, null)).to.match(/^[a-zA-Z]{10}$/);
    });

    test('alphabet object', function () {
        expect(useful.randomString(10, [])).to.match(/^[a-zA-Z]{10}$/);
    });

    test('length undefined', function () {
        expect(useful.randomString(undefined, 'abc')).to.match(/^[abc]{10}$/);
    });

    test('length null', function () {
        expect(useful.randomString(null, 'abc')).to.match(/^[abc]{10}$/);
    });

    test('length object', function () {
        expect(useful.randomString({}, 'abc')).to.match(/^[abc]{10}$/);
    });

    test('length 0', function () {
        expect(useful.randomString(0, 'abc')).to.equal('');
    });

    test('length 1', function () {
        expect(useful.randomString(1, 'abc')).to.match(/^[abc]{1}$/);
    });

    test('length 1000', function () {
        expect(useful.randomString(1000, 'abc')).to.match(/^[abc]{1000}$/);
    });
});
