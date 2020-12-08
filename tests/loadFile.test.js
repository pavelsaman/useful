import useful from '../index.js';
import chai from 'chai';

const expect = chai.expect;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers
*/
suite('loadJsonFile()', function () {

    test('load package.json', function () {
        expect(useful.loadJsonFile('package.json')).not.to.equal(undefined);
    });

    test('file undefined', function () {
        expect(useful.loadJsonFile(undefined)).to.equal(undefined);
    });

    test('file null', function () {
        expect(useful.loadJsonFile(null)).to.equal(undefined);
    });
});
