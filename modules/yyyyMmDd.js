'use strict';
import { _isNotString } from './_isNotString.js';
import { _getYyyyMmDd } from './_getYyyyMmDd.js';
import { formatDay } from './formatDay.js';
import { formatMonth } from './formatMonth.js';

const DEFAULT_SEPARATOR = '/';

/**
 * Return current date in YYYY{{separator}}MM{{separator}}DD.
 * 
 * @param  {string} separator Default '/'.
 */
export function yyyyMmDd (separator) {
    let sep = separator;
    if (_isNotString(separator)) sep = DEFAULT_SEPARATOR;

    const now = _getYyyyMmDd();
    return now.getFullYear().toString() + sep + formatMonth(now) + sep
        + formatDay(now);
}
