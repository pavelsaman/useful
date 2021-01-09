'use strict';
import { _isEqual } from './_isEqual.js';

/* eslint-disable eqeqeq */
/**
 * Return true if given arrays are equal, e.i. have the same members in the
 * same order.
 * 
 * @param  {object} arr
 * @param  {object} arr1
 */
export function isEqual (arr, arr1) {
    if (_isEqual(arr, arr1, (e, e1) => {
        return e == e1;
    }))
        return true;
    return false;
}
