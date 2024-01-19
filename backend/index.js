require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//Fix CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// Controller
const weatherController = require('./controllers/weatherController');

// Routes
app.get('/api/weather/:city', weatherController.getWeather);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
