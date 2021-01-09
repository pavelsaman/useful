'use strict';

/* eslint-disable no-magic-numbers */
/**
 * Return a random integer between min and max inclusive.
 * 
 * @param  {number} min
 * @param  {number} max
 */
export function randInt (min, max) {
    if (arguments.length !== 2)
        throw new Error("Min and max parameters are required.");
    return Math.floor(Math.random()
        * (Number(max) - Number(min) + 1) + Number(min));
}
