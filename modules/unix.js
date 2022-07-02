'use strict';

const secondInMs = 1000;

/**
 * Return unit timestamp.
 *
 */
export function unix() {
  return Math.round(new Date().getTime() / secondInMs);
}
