'use strict';
import _isNotArray from "./_isNotArray.js";

/**
 * Return nth element of an array.
 * 
 * @param  {object} arr
 * @param  {number} nthEl Default to 0.
 * @param  {number} indexStyle Indexing, either start with 0 or 1. Default to 0.
 */
export default function nth (arr, nthEl = 0, indexStyle = 0) {
    if (_isNotArray(arr))
        return undefined;
    if (indexStyle !== 0 && indexStyle !== 1)
        return undefined;
    return arr[indexStyle === 0 ? nthEl : nthEl - 1];
}
