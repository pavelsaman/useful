'use strict';
import { _isNotArray } from "./_isNotArray.js";

export function _sort (arr, func) {
    if (_isNotArray(arr))
        return undefined;
    const arrClone = arr.slice();
    arrClone.sort(func);
    return arrClone;
}
