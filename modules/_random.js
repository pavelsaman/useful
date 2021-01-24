'use strict';
import { customAlphabet } from 'nanoid';

const defaultLength = 10;
const emptyString = '';

export function _random (customAlphabetString, len = defaultLength) {
    let lenStr = len;
    if (len === 0) return emptyString;
    if (customAlphabetString === undefined
        || customAlphabetString === null
        || typeof customAlphabetString !== 'string'
    ) return emptyString;
    if (!Number.isInteger(len)) lenStr = defaultLength;

    const nanoid = customAlphabet(customAlphabetString, lenStr);
    return nanoid();
}
