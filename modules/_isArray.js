'use strict';

export default function isArray (obj) {
    if (!Array.isArray(obj))
        return false;
    return true;
}
