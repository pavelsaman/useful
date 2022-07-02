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
suite('randomEmail()', function () {
  test('default', function () {
    expect(useful.randomEmail()).to.match(/^[0-9]{10}@inveo[.]cz$/);
  });

  test('default with env variable', function () {
    process.env.USEFUL_DEFAULT_DOMAIN = 'abc.co.uk';
    expect(useful.randomEmail()).to.match(/^[0-9]{10}@abc[.]co[.]uk$/);
    delete process.env.USEFUL_DEFAULT_DOMAIN;
  });

  test('no domain', function () {
    expect(useful.randomEmail(10, '')).to.match(/^[0-9]{10}@$/);
  });

  test('no part before @', function () {
    expect(useful.randomEmail(0)).to.match(/^@inveo[.]cz$/);
  });

  test('custom length', function () {
    expect(useful.randomEmail(4)).to.match(/^[0-9]{4}@inveo[.]cz$/);
  });

  test('custom length and domain', function () {
    expect(useful.randomEmail(4, 'abc.com')).to.match(/^[0-9]{4}@abc[.]com$/);
  });

  test('domain undefined', function () {
    expect(useful.randomEmail(4, undefined)).to.match(/^[0-9]{4}@inveo[.]cz$/);
  });

  test('domain null', function () {
    expect(useful.randomEmail(4, null)).to.match(/^[0-9]{4}@inveo[.]cz$/);
  });

  test('domain object', function () {
    expect(useful.randomEmail(4, {})).to.match(/^[0-9]{4}@inveo[.]cz$/);
  });

  test('length undefined', function () {
    expect(useful.randomEmail(undefined, 'abc.com')).to.match(
      /^[0-9]{10}@abc[.]com$/,
    );
  });

  test('length null', function () {
    expect(useful.randomEmail(null, 'abc.com')).to.match(
      /^[0-9]{10}@abc[.]com$/,
    );
  });

  test('length object', function () {
    expect(useful.randomEmail({}, 'abc.com')).to.match(/^[0-9]{10}@abc[.]com$/);
  });

  test('length string', function () {
    expect(useful.randomEmail('undef', 'abc.com')).to.match(
      /^[0-9]{10}@abc[.]com$/,
    );
  });
});
