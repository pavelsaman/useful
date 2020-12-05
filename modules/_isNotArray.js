'use strict';
import isArray from './_isArray.js';

export default function isNotArray (obj) {
    return !isArray(obj);
}
