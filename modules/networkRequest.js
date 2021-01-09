import axios from 'axios';

/**
 * Request a resource with axios.
 * 
 * @param  {object} reqObj Config object
 * @return {Promise} Promise object with response.
 */
export function request (reqObj) {
    try {
        return axios(reqObj);
    } catch (error) {
        console.error(error);
        return error;
    }
}
