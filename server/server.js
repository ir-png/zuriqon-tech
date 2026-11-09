const Express = require("express");
import { createSupabaseContext } from '@supabase/server/core'
const mysql = require('mysql2/promise');
// Load DB config from environment variables (provide defaults for local dev)
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'zuriqon_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
// Create a connection pool that can be reused across requests
const pool = mysql.createPool(dbConfig);

const App = Express();
const Port = process.env.PORT || 3000;

App.use(Express.json());

// Enable CORS for frontend client interactions
App.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// Original health check endpoint preserved
App.get('/api/getdata', (req, res) => {
  res.status(200).json({ status: 'Healthy', message: 'Server is running smoothly' });
});

// Original test post endpoint preserved
App.post('/api/post', (req, res) => {
  const { name } = req.body;
  res.status(201).json({
    message: `user ${name} created successfully!`
  });
});

// Quote request endpoint – stores inquiry in MySQL
App.post('/api/quote', async (req, res) => {
  const { fullName, email, phone, service, message } = req.body;
  if (!fullName || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const [result] = await pool.execute(
      `INSERT INTO project_inquiries (full_name, email, phone, target_service, project_description)
       VALUES (?, ?, ?, ?, ?)`,
      [fullName, email, phone || null, service, message]
    );
    console.log(`[DB] Inquiry ID ${result.insertId} saved.`);
    return res.status(201).json({ status: 'success', inquiryId: result.insertId });
  } catch (err) {
    console.error('DB insertion error:', err);
    return res.status(500).json({ error: 'Database error', details: err.message });
  }
});

App.post('/api/inquiries', (req, res) => {
  const { fullName, email, phone, service, message } = req.body;
  if (!fullName || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required inquiry parameters' });
  }

  console.log(`[ZTG Inquiry Received] From: ${fullName} <${email}> | Service: ${service}`);
  return res.status(201).json({
    status: 'success',
    message: 'Inquiry received by ZTG backend service',
    timestamp: new Date().toISOString()
  });
});

App.listen(Port, () => {
  console.log(`ZTG Server is running on port ${Port}!!`);
});
