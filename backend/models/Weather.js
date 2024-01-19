const axios = require('axios');

class Weather {
  static async getWeather(city) {
    // const apiKey = process.env.API_KEY;
    const apiKey = '7b79e38e701947e3b2b163625241601';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    console.log(apiUrl);
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Weather;