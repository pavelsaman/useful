'use strict';
import { nth } from './nth.js';
import { _isNotArray } from './_isNotArray.js';

/**
 * Return the last element of an array.
 *
 * @param  {object} arr
 */
export function last(arr) {
  if (_isNotArray(arr)) return undefined;
  if (arr.length === 0) return undefined;

  return nth(arr, arr.length, 1);
}
