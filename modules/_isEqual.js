'use strict';
import _isArray from "./_isArray.js";

export default function _isEqual (arr, arr1, func) {
    if (!_isArray(arr) || !_isArray(arr1))
        return false;
    if (typeof func !== 'function')
        return false;
    if (arr.length !== arr1.length)
        return false;
    if (arr.length === 0 && arr1.length === 0)
        return true;
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], arr1[i]))
            return false;
    }
    return true;
}
