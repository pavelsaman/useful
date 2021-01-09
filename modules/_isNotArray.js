'use strict';
import { _isArray } from './_isArray.js';

export function _isNotArray (obj) {
    return !_isArray(obj);
}
