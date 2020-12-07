'use strict';

/* eslint-disable no-magic-numbers */
/**
 * Return day formatted as DD.
 * 
 * @param  {object} day Date object.
 */
export default function formatDay (day) {
    if (!(day instanceof Date))
        return undefined;
    return day.getDate() < 10 ? '0' + day.getDate() : day.getDate().toString();
}
