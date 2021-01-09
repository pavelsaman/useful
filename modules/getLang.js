import { config } from 'dotenv';
import { getEnv } from './getEnv.js';

config();

/**
 * Return language part of a string ('dev-cz' => 'cz').
 * 
 * @param  {string} envVarName Env variable name.
 */
export function getLang (envVarName) {
    const env = getEnv(envVarName);
    if (!env)
        return undefined;
    return env.split('-')[1];
}
