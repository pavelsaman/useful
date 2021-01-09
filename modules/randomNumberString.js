'use strict';
import { _random } from './_random.js';

const DEFAULT_ALPHABET = '0123456789';

/**
 * Generate random number string. If alphabetString is not passed,
 * only [0-9] is a considered alphabet.
 * 
 * @param  {number} len Default 10.
 * @param  {string} alphabetString Default [0-9].
 */
export function randomNumberString (len, alphabetString) {
    let alphabet = alphabetString;

    if (alphabetString === undefined
        || alphabetString === null
        || typeof alphabetString !== 'string'
    ) {
        alphabet = DEFAULT_ALPHABET;
    }

    return _random(alphabet, len);
}
