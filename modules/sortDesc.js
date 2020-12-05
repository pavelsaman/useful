'use strict';
import sort from "./_sort.js";

/**
 * Return a sorted (desc) array clone.
 * 
 * Sorting does not happen in place. Numeric sorting is performed.
 * 
 * @param  {object} arr
 */
export default function sortDesc (arr) {
    return sort(arr, (a, b) => b - a);
}
