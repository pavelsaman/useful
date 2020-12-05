'use strict';
import nth from './nth.js';
import isNotArray from "./_isNotArray.js";

/**
 * Return the last element of an array.
 * 
 * @param  {object} arr
 */
export default function last (arr) {
    if (isNotArray(arr))
        return undefined;
    if (arr.length === 0)
        return undefined;
    return nth(arr, arr.length, 1);
}
