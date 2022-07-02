'use strict';

/**
 * Return day formatted as DD.
 *
 * @param  {object} day Date object.
 */
/* eslint-disable no-magic-numbers */
export function formatDay(day) {
  if (!(day instanceof Date)) return undefined;

  return day.getDate().toString().padStart(2, '0');
}
