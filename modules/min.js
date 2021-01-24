'use strict';
import { _isNotArray } from './_isNotArray.js';

/**
 * Return minimum value from an array.
 * 
 * @param  {object} arr
 */
export function min (arr) {
    if (_isNotArray(arr)) return undefined;
    if (arr.length === 0) return undefined;

    return Math.min(...arr);
}
