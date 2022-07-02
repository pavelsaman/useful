'use strict';
import { _isDate } from './_isDate.js';

const datePortion = 10;

/**
 * Returns the date portion of Date, e.g. "2022-06-12"
 *
 * @param  {Date} date
 */
export function dateAsISO(date) {
  if (!_isDate(date)) return undefined;

  return date.toISOString().slice(0, datePortion);
}
