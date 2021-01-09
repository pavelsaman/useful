'use strict';
import { _isNotArray } from './_isNotArray.js';

/**
 * Return maximum value from an array.
 * 
 * @param  {object} arr
 */
export function max (arr) {
    if (_isNotArray(arr))
        return undefined;
    if (arr.length === 0)
        return undefined;
    return Math.max(...arr);
}
