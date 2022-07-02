'use string';
import { _isString } from './_isString.js';

export function _isNotString(str) {
  return !_isString(str);
}
