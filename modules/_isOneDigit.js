'use string';

const DOUBLE_DIGIT_BOUNDARY_LOWER = -10;
const DOUBLE_DIGIT_BOUNDARY_UPPER = 10;

export function _isOneDigit (num) {
    if (!Number.isInteger(num))
        return undefined;
    if (num <= DOUBLE_DIGIT_BOUNDARY_LOWER)
        return false;
    if (num >= DOUBLE_DIGIT_BOUNDARY_UPPER)
        return false;
    return true;
}
