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
suite('loadYamlFile()', function () {

    test('return object literal', function () {
        expect(typeof useful.loadYamlFile('./tests/static/test.yml'))
            .to.equal('object');
    });

    test('deepply equal', function () {
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

        expect(useful.loadYamlFile('./tests/static/test.yml'))
            .to.deep.equal(expectedResult);
    });

    test('file undefined', function () {
        expect(useful.loadYamlFile(undefined)).to.equal(undefined);
    });

    test('file null', function () {
        expect(useful.loadYamlFile(null)).to.equal(undefined);
    });

    test('file primitive', function () {
        expect(useful.loadYamlFile(1)).to.equal(undefined);
    });

    test('file object', function () {
        expect(useful.loadYamlFile({})).to.equal(undefined);
    });
});
