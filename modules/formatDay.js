'use strict';
import _isOneDigit from './_isOneDigit.js';
import _padDate from './_padDate.js';

/**
 * Return day formatted as DD.
 * 
 * @param  {object} day Date object.
 */
export default function formatDay (day) {
    if (!(day instanceof Date))
        return undefined;
    return _isOneDigit(day.getDate()) ? _padDate(day.getDate())
        : day.getDate().toString();
}
