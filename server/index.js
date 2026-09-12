require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const rezervasyonRoutes = require('./routes/rezervasyonRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Restaurant API is running' });
});

app.use('/rezervasyon', rezervasyonRoutes);
app.use('/admin', adminRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();