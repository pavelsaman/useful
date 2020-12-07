import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('yyyyMmDd()', function () {

    test('return string', function () {
        expect(typeof useful.yyyyMmDd()).to.equal('string');
    });

    test('return string today', function () {
        const now = new Date(Date.now());
        const yyyyMmDd = now.getFullYear().toString()
            + (now.getMonth() + 1).toString()
            + (now.getDate() < 10 ? '0' + now.getDate() : now.getDate())
                .toString();
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
