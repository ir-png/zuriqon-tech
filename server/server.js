require('dotenv').config();

const Express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

// Determine if DB credentials are provided (deployed environment will supply them via a DB URL or individual vars)
const hasDb = process.env.DB_HOST && process.env.DB_NAME && process.env.DB_USER && process.env.DB_PASSWORD;

let pool = null;
if (hasDb) {
  const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };
  pool = mysql.createPool(dbConfig);
} else {
  console.warn('⚠️ No database configuration detected – running in API‑only mode.');
}

const App = Express();
const Port = process.env.PORT || 3000;

App.use(Express.json());
App.use(cors());

// Enable CORS for frontend client interactions (kept for compatibility)
App.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Health check
App.get('/api/getdata', (req, res) => {
  res.status(200).json({ status: 'Healthy', message: 'Server is running smoothly' });
});

// Simple test endpoint
App.post('/api/post', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `user ${name} created successfully!` });
});

// Quote request – store in DB if available, otherwise just acknowledge
App.post('/api/quote', async (req, res) => {
  const { fullName, email, phone, service, message } = req.body;
  if (!fullName || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!pool) {
    console.log('[API‑ONLY] Quote received', { fullName, email, service });
    return res.status(201).json({ status: 'success', note: 'Running without DB – request logged to console' });
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

// Admin auth middleware
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

// Admin routes
App.get('/admin/requests', adminAuth, async (req, res) => {
  if (!pool) return res.status(501).json({ error: 'Database not configured' });
  try {
    const [rows] = await pool.query('SELECT * FROM project_inquiries ORDER BY created_at DESC');
    res.json({ inquiries: rows });
  } catch (err) {
    console.error('Admin fetch error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

App.post('/admin/requests/:id/status', adminAuth, async (req, res) => {
  if (!pool) return res.status(501).json({ error: 'Database not configured' });
  const { id } = req.params;
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Status required' });
  try {
    const [result] = await pool.execute('UPDATE project_inquiries SET status = ? WHERE id = ?', [status, id]);
    res.json({ updated: result.affectedRows });
  } catch (err) {
    console.error('Admin status update error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

App.post('/admin/requests/:id/email', adminAuth, async (req, res) => {
  if (!pool) return res.status(501).json({ error: 'Database not configured' });
  const { id } = req.params;
  const { subject, text, html } = req.body;
  if (!subject || (!text && !html)) {
    return res.status(400).json({ error: 'Subject and body required' });
  }
  try {
    const [[inquiry]] = await pool.execute('SELECT email, full_name FROM project_inquiries WHERE id = ?', [id]);
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    const transportConfig = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
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

App.listen(Port, () => {
  console.log(`ZTG Server is running on port ${Port}!!`);
});
