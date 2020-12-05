'use strict';

export default function isArray (obj) {
    if (!(obj instanceof Array))
        return false;
    return true;
}
