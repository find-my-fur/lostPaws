import pg from 'pg';
const { Pool } = pg;
import 'dotenv/config';

// create a client using the connection to the database
const pool = new Pool({
  connectionString: process.env.CONNECTION,
});

pool
  .connect()
  .then(() => console.log('Connected to PostgreSQL!'))
  .catch((err) => console.log('Error connecting to the database', err));

export default pool;
