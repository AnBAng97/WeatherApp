// Model
const Weather = require('../models/Weather');

exports.getWeather = async (req, res) => {

  const location = req.params.location;
  try {
    const weatherData = await Weather.getWeather(location);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getWeatherForecast = async (req, res) => {
  const location = req.params.location;
  const days = req.params.days;
  try {
    const weatherData = await Weather.getWeatherForecast(location, days);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
