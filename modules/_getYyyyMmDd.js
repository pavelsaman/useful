'use strict';

export function _getYyyyMmDd(offsetInMs = 0) {
  return new Date(Date.now() - offsetInMs);
}
