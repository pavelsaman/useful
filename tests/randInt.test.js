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
suite('randInt()', function () {

    test('throws for params.length === 0', function () {
        expect(function () {
            useful.randInt();
        }).to.throw("Min and max parameters are required.");
    });

    test('throws for params.length === 1', function () {
        expect(function () {
            useful.randInt(1);
        }).to.throw("Min and max parameters are required.");
    });

    test('throws for params.length > 2', function () {
        expect(function () {
            useful.randInt(1, 2, 3);
        }).to.throw("Min and max parameters are required.");
    });

    test('returns integer', function () {
        expect(Number.isInteger(useful.randInt(0, 100))).to.equal(true);
    });

    test('min as string', function () {
        expect(Number.isInteger(useful.randInt('1', 100))).to.equal(true);
    });

    test('max as string', function () {
        expect(Number.isInteger(useful.randInt(1, '100'))).to.equal(true);
    });

    test('within interval', function () {
        for (let i = 0; i < 100; i++) {
            const result = useful.randInt(0, i);
            expect(result).to.be.at.least(0);
            expect(result).to.be.at.most(i);
        }
    });
});
