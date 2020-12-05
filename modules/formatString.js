'use strict';
import isNotArray from './_isNotArray.js';
import containsOnly from './containsOnly.js';

const EMPTY = '';

function isValidConfig (configObj) {
    if (!configObj)
        return false;
    if (configObj.string === undefined
        || configObj.positions === undefined
        || configObj.insertedChar === undefined
    )
        return false;
    if (typeof configObj.string !== 'string')
        return false;
    if (isNotArray(configObj.positions))
        return false;
    if (!containsOnly(configObj.positions, el => typeof el === 'number'))
        return false;
    if (typeof configObj.insertedChar !== 'string')
        return false;

    return true;
}

/**
 * Return a formatted string.
 * 
 * @param  {object} configObj Three properties are mandatory:
 *  string       - an input string;
 *  positions    - an array of numbers that represent indices;
 *  insertedChar - a characted to insert at positions
 */
export default function formatString (configObj) {
    if (!isValidConfig(configObj))
        return undefined;

    const formattedString = [];
    for (let i = 0; i < configObj.string.length; i++) {
        formattedString.push(configObj.string[i]);
        if (configObj.positions.indexOf(i) >= 0)
            formattedString.push(configObj.insertedChar);
    }

    return formattedString.join(EMPTY);
}
