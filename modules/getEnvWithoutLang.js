import dotenv from 'dotenv';
import getEnv from './getEnv.js';

dotenv.config();

/**
 * Return environment part of a string ('dev-cz' => 'dev').
 * 
 * @param  {string} envVarName Env variable name.
 */
export default function getEnvWithoutLang (envVarName) {
    const env = getEnv(envVarName);
    if (!env)
        return undefined;
    return env.split('-')[0];
}
