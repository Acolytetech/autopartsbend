const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // You should fetch real orders from DB here
    const orders = await Order.find(); // assuming you have Order model
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;