import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2/promise';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mi-tech',
};

const pool = mysql.createPool({
  ...dbConfig,
  connectionLimit: 10,
});

app.use(cors());
app.use(express.json());

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    multipleStatements: true,
  });

  await connection.query(`
    CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;
    USE \`${dbConfig.database}\`;
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    );
  `);

  await connection.end();
}

app.get('/health', (_request, response) => {
  response.json({ ok: true });
});

app.post('/api/contact', async (request, response) => {
  const { name, email, message } = request.body ?? {};

  if (!name || !email || !message) {
    return response.status(400).json({
      message: 'Name, email, and message are required.',
    });
  }

  try {
    await pool.execute(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message],
    );

    return response.json({
      message: 'Message saved successfully.',
    });
  } catch (error) {
    console.error('Failed to process contact form:', error);
    return response.status(500).json({
      message: 'Failed to send message. Please try again later.',
    });
  }
});

initializeDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Contact backend listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
