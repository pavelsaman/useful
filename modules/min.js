'use strict';
import isNotArray from './_isNotArray.js';

/**
 * Return minimum value from an array.
 * 
 * @param  {object} arr
 */
export default function min (arr) {
    if (isNotArray(arr))
        return undefined;
    if (arr.length === 0)
        return undefined;
    return Math.min(...arr);
}
