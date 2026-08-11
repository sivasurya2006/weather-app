
const cityInput = document.getElementById("city");
const searchButton = document.getElementById("search-btn");
const message = document.getElementById("message");
const weatherIcon = document.getElementById("weather-icon");
const seasonLabel = document.getElementById("season-label");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchButton.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        showMessage("Please enter a city name", "error");
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        updateWeather(data);
        showMessage("", "");
    } catch (error) {
        showMessage("City not found. Please try again.", "error");
        console.log(error);
    } finally {
        setLoading(false);
    }
}

function updateWeather(data) {
    const temp = Math.round(data.main.temp);
    const weatherMain = data.weather[0].main.toLowerCase();
    const weatherText = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    cityName.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `${temp}°C`;
    description.innerText = weatherText;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} m/s`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherIcon.alt = weatherText;
    weatherIcon.classList.add("show");

    applyWeatherTheme(weatherMain, temp);
}

function applyWeatherTheme(weatherMain, temp) {
    document.body.className = "";

    if (weatherMain.includes("rain") || weatherMain.includes("drizzle") || weatherMain.includes("thunderstorm")) {
        document.body.classList.add("theme-rain");
        seasonLabel.innerText = "Rainy mood";
    } else if (weatherMain.includes("snow") || temp <= 15) {
        document.body.classList.add("theme-winter");
        seasonLabel.innerText = "Winter chill";
    } else if (temp >= 32 || weatherMain.includes("clear")) {
        document.body.classList.add("theme-summer");
        seasonLabel.innerText = "Summer heat";
    } else if (weatherMain.includes("cloud")) {
        document.body.classList.add("theme-clouds");
        seasonLabel.innerText = "Cloudy sky";
    } else if (weatherMain.includes("mist") || weatherMain.includes("fog") || weatherMain.includes("haze")) {
        document.body.classList.add("theme-mist");
        seasonLabel.innerText = "Misty air";
    } else {
        document.body.classList.add("theme-default");
        seasonLabel.innerText = "Fresh weather";
    }
}

function setLoading(isLoading) {
    searchButton.disabled = isLoading;
    searchButton.innerText = isLoading ? "Searching..." : "Search";

    if (isLoading) {
        showMessage("Loading weather...", "");
    }
}

function showMessage(text, type) {
    message.innerText = text;
    message.className = type;
}
