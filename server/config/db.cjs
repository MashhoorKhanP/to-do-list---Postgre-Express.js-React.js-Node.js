const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'Mashhoor@Postgre',
  host: "localhost",
  port: process.env.PORT,
  database: "perntodo"
});

module.exports = pool;