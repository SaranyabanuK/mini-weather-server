const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weatherroutes');

const PORT = 3000;

// Simple logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Home route with buttons and fetch script
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mini Weather Info Server</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 2rem; }
          button { margin: 0.5rem; padding: 0.8rem 1.5rem; font-size: 1rem; cursor: pointer; }
          #result { margin-top: 2rem; font-size: 1.2rem; color: #333; }
        </style>
      </head>
      <body>
        <h2>🌦️ Welcome to the Mini Weather Info Server!</h2>
        <p>Click a city to view its weather info:</p>
        <button onclick="getWeather('Colombo')">Colombo</button>
        <button onclick="getWeather('Jaffna')">Jaffna</button>
        <button onclick="getWeather('Kandy')">Kandy</button>
        <button onclick="getWeather('Galle')">Galle</button>
        <button onclick="getWeather('Batticaloa')">Batticaloa</button>

        <div id="result">Weather data will appear here...</div>

        <script>
          function getWeather(city) {
            fetch('/weather?city=' + city)
              .then(res => res.json())
              .then(data => {
                if (data.error) {
                  document.getElementById('result').innerText = '' + data.error;
                } else {
                  document.getElementById('result').innerHTML = 
                    '📍 City: ' + data.city + '<br>' +
                    '🌡️ Temperature: ' + data.temperature + '<br>' +
                    '⛅ Condition: ' + data.condition + '<br>' +
                    '💧 Humidity: ' + data.humidity;
                }
              })
              .catch(() => {
                document.getElementById('result').innerText = 'Error fetching weather.';
              });
          }
        </script>
      </body>
    </html>
  `);
});

// Use weather router for all /weather routes
app.use('/weather', weatherRoutes);

// 404 Not Found (for all other routes)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Start server
app.listen(PORT);
