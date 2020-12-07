'use strict';

/**
 * Return MM indexed from 1 as string.
 * 
 * @param  {object} month Date object.
 */
export default function formatMonth (month) {
    if (!(month instanceof Date))
        return undefined;
    return (month.getMonth() + 1).toString();
}
