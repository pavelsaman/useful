import { readFileSync } from 'fs';

const ENCODING = 'utf8';

/**
 * Synchronously reads and parses a JSON file.
 * 
 * @param  {string} filename
 * @return {object} Parsed JSON file as an object literal.
 */
export function loadJsonFile (filename) {
    if (filename === undefined || filename === null) return undefined;
    if (typeof filename !== 'string') return undefined;

    return JSON.parse(readFileSync(filename, ENCODING));
}
