'use strict';
import _isEqual from './_isEqual.js';

/**
 * Return true if given arrays are strictly equal, e.i. have the same members
 * in the same order.
 * @param  {object} arr
 * @param  {object} arr1
 */
export default function isStrictlyEqual (arr, arr1) {
    if (_isEqual(arr, arr1, (e, e1) => {
        return e === e1;
    }))
        return true;
    return false;
}
