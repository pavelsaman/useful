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
suite('getConnectionString()', function () {
    test('get connection string', function () {
        expect(typeof useful.getConnectionString({
            user    : "test_user",
            password: "secret",
            server  : "test.database.windows.net",
            database: "TestDB",
        })).to.equal('string');
    });

    test('user missing property', function () {
        expect(useful.getConnectionString({
            password: "secret",
            server  : "test.database.windows.net",
            database: "TestDB",
        })).to.equal(undefined);
    });

    test('password missing property', function () {
        expect(useful.getConnectionString({
            user    : "test_user",
            server  : "test.database.windows.net",
            database: "TestDB",
        })).to.equal(undefined);
    });

    test('server missing property', function () {
        expect(useful.getConnectionString({
            user    : "test_user",
            pasword : "secret",
            database: "TestDB",
        })).to.equal(undefined);
    });

    test('database missing property', function () {
        expect(useful.getConnectionString({
            user   : "test_user",
            pasword: "secret",
            server : "test.database.windows.net",
        })).to.equal(undefined);
    });

    test('missing properties', function () {
        expect(useful.getConnectionString({})).to.equal(undefined);
    });

    test('string argument', function () {
        expect(useful.getConnectionString('a')).to.equal(undefined);
    });

    test('number argument', function () {
        expect(useful.getConnectionString(1)).to.equal(undefined);
    });

    test('null argument', function () {
        expect(useful.getConnectionString(null)).to.equal(undefined);
    });
});
