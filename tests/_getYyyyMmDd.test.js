import _getYyyyMmDd from '../modules/_getYyyyMmDd.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('_getYyyyMmDd()', function () {

    test('typeof', function () {
        expect(typeof _getYyyyMmDd()).to.equal('object');
    });

    test('no argument instanceof', function () {
        expect(_getYyyyMmDd() instanceof Date).to.equal(true);
    });

    test('minus one day instanceof', function () {
        const DAY_IN_MS = 86400000;
        expect(_getYyyyMmDd(DAY_IN_MS) instanceof Date).to.equal(true);
    });
});
