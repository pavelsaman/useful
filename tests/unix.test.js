import { unix } from '../modules/unix.js';
import chai from 'chai';

const { expect } = chai;

/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
suite('unix()', function () {
  test('should return number', function () {
    expect(typeof unix()).to.equal('number');
  });

  test('should return current ts', function () {
    const ts = Math.round(new Date().getTime() / 1000);
    expect(unix()).to.equal(ts);
  });
});
