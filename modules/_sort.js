'use strict';
import isNotArray from "./_isNotArray.js";

export default function sort (arr, func) {
    if (isNotArray(arr))
        return undefined;
    const arrClone = arr.slice();
    arrClone.sort(func);
    return arrClone;
}
