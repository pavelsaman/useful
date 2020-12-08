import fs from 'fs';

const ENCODING = 'utf8';

/**
 * Synchronously reads and parses a JSON file.
 * 
 * @param  {string} filename
 * @return {object} Parsed JSON file as an object literal.
 */
export default function loadJsonFile (filename) {
    if (typeof filename !== 'string')
        return undefined;
    return JSON.parse(fs.readFileSync(filename, ENCODING));
}
