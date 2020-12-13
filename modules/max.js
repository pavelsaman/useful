'use strict';
import isNotArray from './_isNotArray.js';

/**
 * Return maximum value from an array.
 * 
 * @param  {object} arr
 */
export default function max (arr) {
    if (isNotArray(arr))
        return undefined;
    if (arr.length === 0)
        return undefined;
    return Math.max(...arr);
}
