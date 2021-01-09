import { _isEqual } from '../modules/_isEqual.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('_isEqual()', function () {

    test('typeof', function () {
        expect(typeof _isEqual([1], [2])).to.equal('boolean');
    });

    test('not equal arrays', function () {
        expect(_isEqual([1], [2], (a, b) => a === b))
            .to.equal(false);
    });

    test('equal arrays', function () {
        expect(_isEqual([2], [2], (a, b) => a === b))
            .to.equal(true);
    });

    test('first is not array', function () {
        expect(_isEqual(1, [2], (a, b) => a === b))
            .to.equal(false);
    });

    test('second is not array', function () {
        expect(_isEqual([1], 2, (a, b) => a === b))
            .to.equal(false);
    });

    test('no callback', function () {
        expect(_isEqual([1], [2]))
            .to.equal(false);
    });
});
