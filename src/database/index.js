//import { Client } from "pg";
// https://github.com/brianc/node-postgres/wiki/FAQ#14-how-do-i-install-pg-on-windows
// https://github.com/sequelize/sequelize/issues/9610#issuecomment-401065840
export default {
    async getLoginsServiceName() {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        })
        client.connect();
        client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, resp) => {
            if(err) throw err;
            for(let row of resp.rows) {
                console.log(JSON.stringify(row));
            }
            client.end();
        });
    }
}