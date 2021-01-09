'use strict';

/**
 * Return MM indexed from 1 as string.
 * 
 * @param  {object} month Date object.
 */
/* eslint-disable no-magic-numbers */
export function formatMonth (month) {
    if (!(month instanceof Date))
        return undefined;
    const monthIndex = month.getMonth() + 1;
    return monthIndex.toString().padStart(2, '0');
}
