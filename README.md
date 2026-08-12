# Weather App

A responsive weather application built with HTML, CSS, and JavaScript. The app allows users to search for real-time weather information by city name using the OpenWeatherMap API.

## Overview

This project displays current weather data such as temperature, weather condition, humidity, wind speed, and weather icons. It also updates the page theme dynamically based on the current weather condition.

## Features

- Search current weather by city name
- Display temperature in Celsius
- Display weather condition and description
- Show humidity percentage
- Show wind speed
- Display OpenWeatherMap weather icons
- Dynamic background theme based on weather condition
- Loading message while fetching data
- Error handling for invalid city names
- Search support using the Enter key

## Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API

## Project Structure

```text
weather-app/
├── index.html
├── style.css
├── script.js
├── config.example.js
└── README.md
Getting Started
1. Clone the Repository
git clone https://github.com/sivasurya2006/weather-app.git
2. Navigate to the Project Folder
cd weather-app
3. Create a Configuration File
Create a file named config.js in the root folder.
const API_KEY = "your_openweathermap_api_key";
You can use config.example.js as a reference.
4. Run the Project
Open index.html in your browser.
API Configuration
This project uses the OpenWeatherMap API.
API endpoint used:
https://api.openweathermap.org/data/2.5/weather
Example request:
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
How the Application Works
The user enters a city name.
JavaScript validates the input.
A request is sent to the OpenWeatherMap API.
If the city is found, weather data is displayed on the page.
If the city is not found, an error message is shown.
The background theme changes based on the weather condition.
Weather Themes
The app applies different themes depending on the weather:
Rain, drizzle, or thunderstorm: Rainy theme
Snow or low temperature: Winter theme
Clear sky or high temperature: Summer theme
Clouds: Cloudy theme
Mist, fog, or haze: Mist theme
Other conditions: Default theme
Security Note
Do not upload your real API key to GitHub.
Keep your actual API key inside config.js, and add config.js to .gitignore.
Use config.example.js only as a sample file:
const API_KEY = "your_openweathermap_api_key";
Future Improvements
Add current location weather
Add 5-day weather forecast
Add dark/light mode
Add recent search history
Improve mobile UI animations
Author
Siva Surya
GitHub: sivasurya2006
