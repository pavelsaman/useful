'use strict';

export default function _isString (str) {
    if (str === undefined
        || str === null
        || typeof str !== 'string'
    )
        return false;
    return true;
}
