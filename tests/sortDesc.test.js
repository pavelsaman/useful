import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('sortDesc()', function () {

    test('sorted', function () {
        expect(useful.sortDesc([8, 15, 2]))
            .to.include.ordered.members([15, 8, 2]);
    });

    test('primitive', function () {
        expect(useful.sortDesc(1)).to.equal(undefined);
    });

    test('object', function () {
        expect(useful.sortDesc({ a: 1 })).to.equal(undefined);
    });
});
