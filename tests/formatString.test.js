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
suite('formatString()', function () {
    test('insert spaces', function () {
        expect(useful.formatString({
            string      : '+420739844920',
            positions   : [3, 6, 9],
            insertedChar: ' ',
        })).to.equal('+420 739 844 920');
    });

    test('insert dash', function () {
        expect(useful.formatString({
            string      : '+420739844920',
            positions   : [3],
            insertedChar: '-',
        })).to.equal('+420-739844920');
    });

    test('insert nothing', function () {
        expect(useful.formatString({
            string      : '420739844920',
            positions   : [],
            insertedChar: '',
        })).to.equal('420739844920');
    });

    test('insert nothing, include positions', function () {
        expect(useful.formatString({
            string      : '420739844920',
            positions   : [3, 6],
            insertedChar: '',
        })).to.equal('420739844920');
    });

    test('no string', function () {
        expect(useful.formatString({
            positions   : [3, 6],
            insertedChar: '',
        })).to.equal(undefined);
    });

    test('no positions', function () {
        expect(useful.formatString({
            string      : '789456123',
            insertedChar: '',
        })).to.equal(undefined);
    });

    test('no insertedChar', function () {
        expect(useful.formatString({
            string   : '789456123',
            positions: [3, 6],
        })).to.equal(undefined);
    });

    test('empty object', function () {
        expect(useful.formatString({})).to.equal(undefined);
    });

    test('array object', function () {
        expect(useful.formatString([])).to.equal(undefined);
    });

    test('primitive', function () {
        expect(useful.formatString(1)).to.equal(undefined);
    });

    test('null', function () {
        expect(useful.formatString(null)).to.equal(undefined);
    });

    test('undefined', function () {
        expect(useful.formatString(undefined)).to.equal(undefined);
    });

    test('wrong data type positions', function () {
        expect(useful.formatString({
            string      : '+420739844920',
            positions   : [3, '6', 9],
            insertedChar: ' ',
        })).to.equal(undefined);
    });
});
