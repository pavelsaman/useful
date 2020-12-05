import axios from 'axios';

/**
 * Request a resource with axios.
 * 
 * @param  {object} reqObj Config object
 */
export default function request (reqObj) {
    try {
        return axios(reqObj);
    } catch (error) {
        console.error(error);
        return error;
    }
}
