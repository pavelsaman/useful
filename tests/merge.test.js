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
suite('merge()', function () {
  test('returns undefined when first input is not object', function () {
    expect(useful.merge('a', {})).to.equal(undefined);
  });

  test('returns undefined when second input is not object', function () {
    expect(useful.merge({}, 1)).to.equal(undefined);
  });

  test('returns empty object if both objects are empty', function () {
    expect(useful.merge({}, {})).to.deep.equal({});
  });

  test('do not overwrite __proto__ property', function () {
    expect(
      useful.merge({}, { __proto__: { a: 1 }, b: { c: 2 } }),
    ).to.not.have.nested.property('__proto__.a');
    expect(
      useful.merge({}, { __proto__: { a: 1 }, b: { c: 2 } }),
    ).to.have.nested.property('b.c');
  });

  test('overwrite same property with new value', function () {
    expect(useful.merge({ a: 1 }, { a: 2 })).to.deep.equal({ a: 2 });
  });

  test('should have all properties', function () {
    expect(useful.merge({ a: 1 }, { b: 2 })).to.deep.equal({ a: 1, b: 2 });
  });

  test('should have all nested properties', function () {
    expect(useful.merge({ a: { b: 1 } }, { c: { d: 2 } })).to.deep.equal({
      a: { b: 1 },
      c: { d: 2 },
    });
  });
});
