const Express = require("express");
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

// Inquiries endpoint for backup / server-side logging
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
