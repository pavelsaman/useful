import { readFileSync } from 'fs';
import YAML from 'yaml';

const { parse } = YAML;
const encoding = 'utf8';

/**
 * Synchronously reads and parses a YAML file.
 * 
 * @param  {string} filename
 * @return {object} Parsed YAML file as an object literal.
 */
export function loadYamlFile (filename) {
    if (filename === undefined || filename === null) return undefined;
    if (typeof filename !== 'string') return undefined;

    return parse(readFileSync(filename, encoding));
}
