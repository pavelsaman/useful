'use strict';
import { _isObject } from './_isObject.js';

export function _isNotObject(obj) {
  return !_isObject(obj);
}
