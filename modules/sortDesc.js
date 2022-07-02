'use strict';
import { _sort } from './_sort.js';

/**
 * Return a sorted (desc) array clone.
 *
 * Sorting does not happen in place. Numeric sorting is performed.
 *
 * @param  {object} arr
 */
export function sortDesc(arr) {
  return _sort(arr, (a, b) => b - a);
}
