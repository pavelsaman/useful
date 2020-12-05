'use strict';
import isNotArray from "./_isNotArray.js";

/**
 * Return nth element of an array.
 * 
 * @param  {object} arr
 * @param  {number} nth Default to 0.
 * @param  {number} indexStyle Indexing, either start with 0 or 1. Default to 0.
 */
export default function nth (arr, nth = 0, indexStyle = 0) {
    if (isNotArray(arr))
        return undefined;
    if (indexStyle !== 0 && indexStyle !== 1)
        return undefined;
    return arr[indexStyle === 0 ? nth : nth - 1];
}
