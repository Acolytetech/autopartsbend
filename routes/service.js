const router = require('express').Router();
const Service = require('../models/Service');

router.post('/', async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.status(201).json('Service booked');
});

router.get('/:userId', async (req, res) => {
  const services = await Service.find({ userId: req.params.userId });
  res.json(services);
});

module.exports = router;