'use strict';
import { _sort } from "./_sort.js";

/**
 * Return a sorted (asc) array clone.
 * 
 * Sorting does not happen in place. Numeric sorting is performed.
 * 
 * @param  {object} arr
 */
export function sortAsc (arr) {
    return _sort(arr, (a, b) => a - b);
}
