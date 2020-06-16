const { Pool } = require('pg');

// Must have DATABASE_URL in environment variables
// const connectionString = process.env.DATABASE_URL;
const postgresUser = "crud_user";
const postgresDb = "crud_db";
const postgresPass = "1019";

var connectionString = `postgres://${postgresUser}:${postgresPass}@localhost:5432/${postgresDb}`;

const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}