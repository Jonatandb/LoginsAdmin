/* eslint-disable no-console */
import { dummyCredentialsList } from '../_utils/dummyData';

const connectionString = process.env.DATABASE_URL || process.env.REACT_APP_DATABASE_URL;

export default {
    async getLoginsServiceName() {
        console.log('database/index.js - > getLoginsServiceName()\nconnectionString = ' + connectionString);
        return dummyCredentialsList;
    }
};
