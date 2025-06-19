const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const serviceRoutes = require('./routes/service');

const app = express();
app.use(cors());
app.use(cors({ origin: 'https://autopartsft.vercel.app' }));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/services', serviceRoutes);
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://slawaniya03:V1MoHp7w0UxsbBYx@cluster0.cr4a3gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
