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
suite('yyyyMmDd()', function () {
    test('return string', function () {
        expect(typeof useful.yyyyMmDd()).to.equal('string');
    });

    test('return string today', function () {
        const now = new Date(Date.now());
        const monthIndex = now.getMonth() + 1;
        const yyyyMmDd = now.getFullYear().toString()
            + monthIndex.toString().padStart(2, '0')
            + now.getDate().toString().padStart(2, '0');
        expect(useful.yyyyMmDd('')).to.equal(yyyyMmDd);
    });

    test('no separator', function () {
        expect(useful.yyyyMmDd()).to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
    });

    test('separator "-"', function () {
        expect(useful.yyyyMmDd('-')).to.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
    });

    test('empty separator', function () {
        expect(useful.yyyyMmDd('')).to.match(/^[0-9]{8}$/);
    });

    test('undefined separator', function () {
        expect(useful.yyyyMmDd(undefined))
            .to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
    });

    test('null separator', function () {
        expect(useful.yyyyMmDd(null))
            .to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
    });

    test('number separator', function () {
        expect(useful.yyyyMmDd(5))
            .to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
    });

    test('object separator', function () {
        expect(useful.yyyyMmDd({}))
            .to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
    });
});
