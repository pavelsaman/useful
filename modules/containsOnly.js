'use strict';
import isNotArray from './_isNotArray.js';

/**
 * Return true if an array contains only certain elements.
 * 
 * @param  {object} arr An array object to check
 * @param  {function} func A function that performs the check
 */
export default function containsOnly (arr, func) {
    if (isNotArray(arr))
        return undefined;
    if (typeof func !== 'function')
        return undefined;

    for (const el of arr) {
        if (!func(el))
            return false;
    }

    return true;
}
