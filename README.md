# Mini Weather Info Server

A beginner-friendly Express.js project that demonstrates core backend concepts such as routing, middleware, query parameter handling, and modular route management.

---

## Features

- Simple REST API to get mock weather data for select Sri Lankan cities
- Interactive home page with buttons to fetch and display weather info dynamically
- Modular route handling using Express Router (`/weather` endpoints)
- Custom middleware for logging requests
- 404 fallback route for undefined endpoints
- Placeholder POST route (`/weather/add`) to demonstrate handling HTTP methods

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SaranyabanuK/mini-weather-server.git

## Usage
Start the server in development mode (auto restarts on file changes):

```bash
npm run dev

Or start normally:

```bash
npm start
Open your browser and visit:

```arduino
http://localhost:3000
Click the city buttons on the home page to fetch weather info.

API Endpoints
GET /weather?city=CityName
Returns weather data for the specified city (case-insensitive).

POST /weather/add
Placeholder route — currently returns a "feature not supported" message.

---

 ## Project Structure
```bash
mini-weather-server/
├── app.js             # Main Express app with middleware and home route
├── data/
│   └── weather.js     # Mock weather data
├── routes/
│   └── weatherRoutes.js # Express Router handling /weather endpoints
├── package.json       # Project metadata and scripts
└── README.md          # Project documentation

---

## License
This project is licensed under the ISC License.

Author
Saranya B.


