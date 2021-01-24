'use string';

const doubleDigitBoundaryLower = -10;
const doubleDigitBoundaryUpper = 10;

export function _isOneDigit (num) {
    if (!Number.isInteger(num)) return undefined;
    if (num <= doubleDigitBoundaryLower) return false;
    if (num >= doubleDigitBoundaryUpper) return false;

    return true;
}
