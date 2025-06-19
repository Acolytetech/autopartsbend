const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
  userId: String,
  vehicleType: String,
  serviceDate: String,
  address: String,
  contact: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Service', serviceSchema);