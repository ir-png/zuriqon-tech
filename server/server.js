require('dotenv').config();

const Express = require('express');
const cors = require('cors');
// const { createSupabaseContext } = require('@supabase/server/core');


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

// ====================
// ADMIN ROUTES (basic auth)
// ====================
const nodemailer = require('nodemailer');

// Simple Basic Auth middleware (hard‑coded admin credentials)
function adminAuth(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="Admin Area"');
    return res.status(401).json({ error: 'Authentication required' });
  }
  const b64 = auth.split(' ')[1];
  const decoded = Buffer.from(b64, 'base64').toString('utf8');
  const [email, password] = decoded.split(':');
  if (email !== 'zuriqongroup@gmail.com' || password !== 'Admin@123') {
    return res.status(403).json({ error: 'Invalid admin credentials' });
  }
  next();
}

// Get all inquiries (admin view)
App.get('/admin/requests', adminAuth, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM project_inquiries ORDER BY created_at DESC');
    res.json({ inquiries: rows });
  } catch (err) {
    console.error('Admin fetch error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Update inquiry status (approve / other)
App.post('/admin/requests/:id/status', adminAuth, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // expect one of the ENUM values
  if (!status) return res.status(400).json({ error: 'Status required' });
  try {
    const [result] = await pool.execute('UPDATE project_inquiries SET status = ? WHERE id = ?', [status, id]);
    res.json({ updated: result.affectedRows });
  } catch (err) {
    console.error('Admin status update error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Send email reply to requester
App.post('/admin/requests/:id/email', adminAuth, async (req, res) => {
  const { id } = req.params;
  const { subject, text, html } = req.body;
  if (!subject || (!text && !html)) {
    return res.status(400).json({ error: 'Subject and body required' });
  }
  try {
    // Fetch the requester's email
    const [[inquiry]] = await pool.execute('SELECT email, full_name FROM project_inquiries WHERE id = ?', [id]);
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });

    // Configure transport – use environment variables if provided, otherwise a console‑log stub
    const transportConfig = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };
    const transporter = nodemailer.createTransport(transportConfig);

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'no-reply@zuriqon.tech',
      to: inquiry.email,
      subject,
      text,
      html,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    res.json({ sent: true, messageId: info.messageId });
  } catch (err) {
    console.error('Admin email error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// ====================
// End of admin routes
// ====================
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
