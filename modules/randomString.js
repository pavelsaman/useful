'use strict';
import { _random } from './_random.js';

const defaultAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Generate random string. If alphabetString is not passed,
 * only [a-zA-Z] is a considered alphabet.
 * 
 * @param  {number} len Default 10.
 * @param  {string} alphabetString Default [a-zA-Z].
 */
export function randomString (len, alphabetString) {
    let alphabet = alphabetString;

    if (alphabetString === undefined
        || alphabetString === null
        || typeof alphabetString !== 'string'
    ) alphabet = defaultAlphabet;

    return _random(alphabet, len);
}
