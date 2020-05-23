const { Pool } = require('pg');

// Must have DATABASE_URL in environment variables
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}