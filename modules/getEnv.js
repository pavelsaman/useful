import { config } from 'dotenv';

config();

/**
 * Return value from an env variable.
 *
 * @param  {string} envVarName Env variable name.
 */
export function getEnv(envVarName) {
  return process.env[envVarName];
}
