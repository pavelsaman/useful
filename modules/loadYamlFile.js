import fs from 'fs';
import YAML from 'yaml';

const ENCODING = 'utf8';

/**
 * Synchronously reads and parses a YAML file.
 * 
 * @param  {string} filename
 * @return {object} Parsed YAML file as an object literal.
 */
export default function loadYamlFile (filename) {
    if (filename === undefined || filename === null)
        return undefined;
    if (typeof filename !== 'string')
        return undefined;
    return YAML.parse(fs.readFileSync(filename, ENCODING));
}
