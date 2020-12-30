'use strict';

export default function _getYyyyMmDd (offsetInMs = 0) {
    return new Date(Date.now() - offsetInMs);
}
