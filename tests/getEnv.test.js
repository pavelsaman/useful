import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('getEnv()', function () {

    test('get env variable value', function () {
        process.env.TTT = '5';
        expect(useful.getEnv('TTT')).to.equal('5');
        delete process.env.TTT;
    });

    test('name undefined', function () {
        expect(useful.getEnv(undefined)).to.equal(undefined);
    });

    test('name null', function () {
        expect(useful.getEnv(null)).to.equal(undefined);
    });

    test('name object', function () {
        expect(useful.getEnv({})).to.equal(undefined);
    });

    test('name number', function () {
        expect(useful.getEnv(5)).to.equal(undefined);
    });

    test('name missing', function () {
        expect(useful.getEnv()).to.equal(undefined);
    });
});
