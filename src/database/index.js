import axios from "axios";
import loginsServiceNameEndpoint from './config.js';

const showLogs = false;

export default {    
    async getLoginsServiceName() {
        const url = loginsServiceNameEndpoint;
        try {
            const result = await axios.get(url);
showLogs && console.log(result.data);
            return result.data;
        }
        catch (error) {
            return error;
        }
    }
}