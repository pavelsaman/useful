'use strict';
import randomNumberString from './randomNumberString.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Generate random email. If len is 0, the part before '@' will be
 * missing. If domainStr is '', no domain will be included.
 * 
 * @param  {number} len Default 10.
 * @param  {string} domainStr Default USEFUL_DEFAULT_DOMAIN env variable
 *  or "inveo.cz".
 */
export default function randomEmail (len, domainStr) {
    let domain = domainStr;
    if (domainStr === undefined
        || domainStr === null
        || typeof domainStr !== 'string'
    )
        domain = process.env.USEFUL_DEFAULT_DOMAIN || "inveo.cz";
    return randomNumberString(len) + "@" + domain;
}
