'use strict';

/**
 * Return unit timestamp.
 *
 */
export function unix() {
  return Math.round(new Date().getTime() / 1000);
}
