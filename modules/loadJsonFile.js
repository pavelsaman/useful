import fs from 'fs';

const encoding = 'utf8';

/**
 * Reads and parses a json file.
 * 
 * @param  {string} filename
 */
export default function loadJsonFile (filename) {
    if (typeof filename !== 'string')
        return undefined;
    return JSON.parse(fs.readFileSync(filename, encoding));
}
