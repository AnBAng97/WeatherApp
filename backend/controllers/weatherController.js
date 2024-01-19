const axios = require('axios');

// Model
const Weather = require('../models/Weather');

exports.getWeather = async (req, res) => {

    const city = req.params.city;
  try {
    const weatherData = await Weather.getWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
