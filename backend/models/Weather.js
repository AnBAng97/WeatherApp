const axios = require('axios');

class Weather {

  static async getWeather(queryString) {

    /** queryString can be
     * Pass US Zipcode, UK Postcode, Canada Postalcode, 
     * IP address, Latitude/Longitude (decimal degree) 
     * or city name. 
     * Visit request parameter section to learn more. */
    // const apiKey = process.env.API_KEY;
    const apiKey = '7b79e38e701947e3b2b163625241601';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${queryString}&aqi=no`;

    console.log(apiUrl);
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getWeatherForecast(location, days) {
    /** location can be
    * Pass US Zipcode, UK Postcode, Canada Postalcode, 
    * IP address, Latitude/Longitude (decimal degree) 
    * or city name. 
    * Visit request parameter section to learn more. */
    const apiKey = '7b79e38e701947e3b2b163625241601';
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`;
    console.log(`API CALLED: ${apiUrl}`);
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = Weather;