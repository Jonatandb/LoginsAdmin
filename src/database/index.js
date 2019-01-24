//require('dotenv').config(); // lee y establece lo que tenga el archivo ".env" (Usado solo en dev)
// const promise = require('bluebird');
// const initOptions = {promiseLib: promise};
// const pgp = require('pg-promise')(initOptions);
const connectionString = process.env.DATABASE_URL;

export default {
    async getLoginsServiceName() {
        // const db = pgp(connectionString);
        // db.any('select login_id, service_name from logins;')
        // .then(data => {
        //     return data;
        // })
        // .catch(error => {
        //     console.log('ERROR:', error);
        console.log('getLoginsServiceName() - connectionString: ' + connectionString);
            return [];
        // })
        // .finally(db.$pool.end);
    }
}