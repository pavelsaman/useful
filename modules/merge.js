'use strict';
import { _isNotObject } from './_isNotObject.js';

/**
 * Merge two objects.
 *
 * @param  {object} obj
 * @param  {object} obj1
 */
export function merge(obj, obj1) {
  if (_isNotObject(obj) || _isNotObject(obj1)) return undefined;

  Object.freeze(obj);
  Object.freeze(obj1);
  return { ...obj, ...obj1 };
}
