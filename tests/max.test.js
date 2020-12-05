import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('max()', function () {

    test('find max', function () {
        expect(useful.max([1, 5, 8])).to.equal(8);
    });

    test('empty array', function () {
        expect(useful.max([])).to.equal(undefined);
    });

    test('object', function () {
        expect(useful.max({})).to.equal(undefined);
    });

    test('null', function () {
        expect(useful.max(null)).to.equal(undefined);
    });

    test('undefined', function () {
        expect(useful.max(undefined)).to.equal(undefined);
    });
});
