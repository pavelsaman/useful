import useful from '../index.js';
import chai from 'chai';

const { expect } = chai;
const dayInMs = 86400000;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('pastYyyyMmDd()', function () {
  test('return string', function () {
    expect(typeof useful.pastYyyyMmDd()).to.equal('string');
  });

  test('return string yesterday', function () {
    const now = new Date(Date.now() - dayInMs);
    const monthIndex = now.getMonth() + 1;
    const yyyyMmDd =
      now.getFullYear().toString() +
      monthIndex.toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0');
    expect(useful.pastYyyyMmDd('')).to.equal(yyyyMmDd);
  });

  test('return string two days ago', function () {
    const now = new Date(Date.now() - dayInMs * 2);
    const yyyyMmDd =
      now.getFullYear().toString() +
      (now.getMonth() + 1).toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0');
    expect(useful.pastYyyyMmDd('', 2)).to.equal(yyyyMmDd);
  });

  test('no separator', function () {
    expect(useful.pastYyyyMmDd()).to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
  });

  test('separator "-"', function () {
    expect(useful.pastYyyyMmDd('-')).to.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
  });

  test('empty separator', function () {
    expect(useful.pastYyyyMmDd('')).to.match(/^[0-9]{8}$/);
  });

  test('undefined separator', function () {
    expect(useful.pastYyyyMmDd(undefined)).to.match(
      /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/,
    );
  });

  test('null separator', function () {
    expect(useful.pastYyyyMmDd(null)).to.match(
      /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/,
    );
  });

  test('number separator', function () {
    expect(useful.pastYyyyMmDd(5)).to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
  });

  test('object separator', function () {
    expect(useful.pastYyyyMmDd({})).to.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/);
  });
});
