'use strict';

export function _isString (str) {
    if (str === undefined
        || str === null
        || typeof str !== 'string'
    ) return false;

    return true;
}
