// routes/weatherRoutes.js
const express = require('express');
const router = express.Router();
const weatherData = require('../data/weather');

// Existing GET /weather route here
router.get('/', (req, res) => {
  const cityQuery = req.query.city;
  if (!cityQuery) {
    return res.status(400).json({ error: "Please provide a city name using ?city=cityname" });
  }

  const city = cityQuery.toLowerCase();
  const weather = weatherData[city];

  if (weather) {
    res.json(weather);
  } else {
    res.status(404).json({ error: `Weather data not found for '${cityQuery}'.` });
  }
});

// Add POST /weather/add here
router.post('/add', (req, res) => {
  res.status(501).json({ message: "🚧 Feature not supported yet. Coming soon!" });
});

module.exports = router;
