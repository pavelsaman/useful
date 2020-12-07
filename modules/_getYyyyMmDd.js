'use strict';

export default function getDate (offsetInMs = 0) {
    const date = new Date(Date.now() - offsetInMs);
    return date;
}
