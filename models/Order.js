const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  userId: String,
  products: Array,
  amount: Number,
  status: { type: String, default: 'Pending' },
  address: Object,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);