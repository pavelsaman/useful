'use strict';
import _isOneDigit from './_isOneDigit.js';
import _padDate from './_padDate.js';

/**
 * Return MM indexed from 1 as string.
 * 
 * @param  {object} month Date object.
 */
export default function formatMonth (month) {
    if (!(month instanceof Date))
        return undefined;
    const monthIndex = month.getMonth() + 1;
    return _isOneDigit(monthIndex) ? _padDate(monthIndex)
        : monthIndex.toString();
}
