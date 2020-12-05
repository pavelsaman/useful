'use strict';
import nth from './nth.js';
import isNotArray from "./_isNotArray.js";

/**
 * Return the first element of an array.
 * 
 * @param  {object} arr
 */
export default function first (arr) {
    if (isNotArray(arr))
        return undefined;
    if (arr.length === 0)
        return undefined;
    return nth(arr, 0, 0);
}
