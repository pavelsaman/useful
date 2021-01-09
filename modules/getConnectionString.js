
/**
 * Return connection string for MSSQL DB.
 * 
 * @param  {object} infoObj Object with user, password, server, and database
 *  properties.
 */
export function getConnectionString (infoObj) {
    if (infoObj === undefined || infoObj === null)
        return undefined;
    if (typeof infoObj !== 'object')
        return undefined;
    if (typeof infoObj.user !== 'string'
        || typeof infoObj.password !== 'string'
        || typeof infoObj.server !== 'string'
        || typeof infoObj.database !== 'string'
    )
        return undefined;

    return 'mssql://' + infoObj.user + ':' + infoObj.password + '@'
        + infoObj.server + '/' + infoObj.database + '?encrypt=true';
}
