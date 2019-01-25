/* eslint-disable no-console */
const promise = require('bluebird');
const initOptions = { promiseLib: promise };
const pgp = require('pg-promise')(initOptions);
const connectionString = process.env.DATABASE_URL || process.env.REACT_APP_DATABASE_URL;

export default {
    async getLoginsServiceName() {
        console.log(connectionString);
        const db = pgp(connectionString);
        db.any('select login_id, service_name from logins;')
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log('ERROR:', error);
                return [];
            })
            .finally(db.$pool.end);
    }
};