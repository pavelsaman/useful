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
suite('loadJsonFile()', function () {

    test('load package.json', function () {
        expect(useful.loadJsonFile('package.json')).not.to.equal(undefined);
    });

    test('deeply equal', function () {
        const expectedResult = {
            people: [
                {
                    name: 'pavel',
                    age : 29
                },
                {
                    name: 'shark',
                    age : 205
                }
            ]
        };

        expect(useful.loadJsonFile('./tests/static/test.json'))
            .to.deep.equal(expectedResult);
    });

    test('file undefined', function () {
        expect(useful.loadJsonFile(undefined)).to.equal(undefined);
    });

    test('file null', function () {
        expect(useful.loadJsonFile(null)).to.equal(undefined);
    });
});
