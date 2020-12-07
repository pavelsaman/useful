'use strict';
import { customAlphabet } from 'nanoid';

const DEFAULT_LENGTH = 10;
const EMPTY_STRING = '';

function _random (customAlphabetString, len = DEFAULT_LENGTH) {
    let lenStr = len;
    if (len === 0)
        return EMPTY_STRING;
    if (customAlphabetString === undefined
        || customAlphabetString === null
        || typeof customAlphabetString !== 'string'
    )
        return EMPTY_STRING;
    if (!Number.isInteger(len))
        lenStr = DEFAULT_LENGTH;

    const nanoid = customAlphabet(customAlphabetString, lenStr);
    return nanoid();
}

export default _random;
