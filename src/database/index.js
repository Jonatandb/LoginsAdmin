// import axios from "axios";
// import loginsServiceNameEndpoint from './config.js';
import { Client } from "pg";
const showLogs = false;
// https://www.robinwieruch.de/react-fetching-data/
// TODO: Mejorar esto!
export default {    
    async getLoginsServiceName() {

        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        })

        client.connect();

        client.query('', (err, resp) => {
            if(err) throw err;
            for(let row of res.rows) {
                console.log(JSON.stringify(row));
            }
            client.end();
        });
//         const url = loginsServiceNameEndpoint;
//         try {
//             const result = await axios.get(url);
// showLogs && console.log(result.data);
//             return result.data;
//         }
//         catch (error) {
//             return error;
//         }

    }
}