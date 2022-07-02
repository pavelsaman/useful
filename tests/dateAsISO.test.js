import { dateAsISO } from '../modules/dateAsISO.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('dateAsISO()', function () {
  test('should return string instance', function () {
    expect(typeof dateAsISO(new Date())).to.equal('string');
  });

  test('should return ISO format', function () {
    expect(dateAsISO(new Date())).to.match(/^\d{4}-\d{2}-\d{2}$/);
  });

  test('should return date portion', function () {
    const expectedResult = new Date().toISOString().slice(0, 10);
    expect(dateAsISO(new Date())).to.equal(expectedResult);
  });

  test('should return undefined when number is passed in', function () {
    expect(dateAsISO(8)).to.equal(undefined);
  });
});
