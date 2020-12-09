import dotenv from 'dotenv';

dotenv.config();

/**
 * Return value from an env variable.
 * 
 * @param  {string} envVarName Env variable name.
 */
export default function getEnv (envVarName) {
    return process.env[envVarName];
}
