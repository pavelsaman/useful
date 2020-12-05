'use strict';
import sort from "./_sort.js";

/**
 * Return a sorted (asc) array clone.
 * 
 * Sorting does not happen in place. Numeric sorting is performed.
 * 
 * @param  {object} arr
 */
export default function sortAsc (arr) {
    return sort(arr, (a, b) => a - b);
}
