import fs from 'fs';

const ENCODING = 'utf8';

/**
 * Synchronously reads and parses a json file.
 * 
 * @param  {string} filename
 */
export default function loadJsonFile (filename) {
    if (typeof filename !== 'string')
        return undefined;
    return JSON.parse(fs.readFileSync(filename, ENCODING));
}
