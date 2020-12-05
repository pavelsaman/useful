import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('min()', function () {

    test('find min', function () {
        expect(useful.min([1, 5, 8])).to.equal(1);
    });

    test('empty array', function () {
        expect(useful.min([])).to.equal(undefined);
    });

    test('object', function () {
        expect(useful.min({})).to.equal(undefined);
    });

    test('null', function () {
        expect(useful.min(null)).to.equal(undefined);
    });

    test('undefined', function () {
        expect(useful.min(undefined)).to.equal(undefined);
    });
});
