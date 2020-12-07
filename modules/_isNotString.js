'use string';
import _isString from './_isString.js';

export default function _isNotString (str) {
    return !_isString(str);
}
