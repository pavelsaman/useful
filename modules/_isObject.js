'use strict';
import { _isNotArray } from './_isNotArray.js';

export function _isObject(obj) {
  return typeof obj === 'object' && _isNotArray(obj) && obj !== null;
}
