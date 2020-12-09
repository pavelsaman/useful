import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('getEnvWithoutLang()', function () {

    test('get value', function () {
        process.env.TTT = 'dev-cz';
        expect(useful.getEnvWithoutLang('TTT')).to.equal('dev');
        delete process.env.TTT;
    });

    test('name undefined', function () {
        expect(useful.getEnvWithoutLang(undefined)).to.equal(undefined);
    });
});
