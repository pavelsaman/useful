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
suite('sortAsc()', function () {

    test('sorted', function () {
        expect(useful.sortAsc([8, 15, 2]))
            .to.include.ordered.members([2, 8, 15]);
    });

    test('primitive', function () {
        expect(useful.sortAsc(1)).to.equal(undefined);
    });

    test('object', function () {
        expect(useful.sortAsc({ a: 1 })).to.equal(undefined);
    });
});
