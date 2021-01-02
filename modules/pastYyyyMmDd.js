'use strict';
import _isNotString from './_isNotString.js';
import _getYyyyMmDd from './_getYyyyMmDd.js';
import formatDay from './formatDay.js';
import formatMonth from './formatMonth.js';

const DEFAULT_SEPARATOR = '/';
const DAY_IN_MS = 86400000;

/* eslint-disable no-magic-numbers */
/**
 * Return past date in YYYY{{separator}}MM{{separator}}DD.
 * 
 * @param  {string} separator Default '/'.
 * @param  {number} daysAgo Default 1.
 */
export default function pastYyyyMmDd (separator, daysAgo) {
    let sep = separator;
    let numberOfDays = daysAgo;

    if (_isNotString(separator))
        sep = DEFAULT_SEPARATOR;
    if (typeof daysAgo !== 'number' || !Number.isFinite(daysAgo))
        numberOfDays = 1;

    const now = _getYyyyMmDd(DAY_IN_MS * numberOfDays);
    return now.getFullYear().toString() + sep + formatMonth(now) + sep
        + formatDay(now);
}
