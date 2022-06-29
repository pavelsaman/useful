import { _isDate } from '../modules/_isDate.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('_isDate()', function () {
    test('should be Date instance', function () {
        expect(_isDate(new Date())).to.equal(true);
    });

    test('should not be Date instance', function () {
        expect(_isDate('abc')).to.equal(false);
    });
});
