import "../style.css";

const BASE_URL = "https://dataservice.accuweather.com";
let API_KEY = localStorage.getItem("accuweather_api_key");

// Check if the api key is stored in local storage.
if (!API_KEY) {
  alert(
    "Please store your API key in local storage with the key 'accuweather_api_key'.",
  );
} else {
  const search = document.getElementById("search");
  search.addEventListener("submit", getWeatherForecast);
}

function getWeatherForecast(event) {
  event.preventDefault();
  const city = document.getElementById("city").value.trim();
  document.getElementById("city").value = "";
  getLocationKey(city);
}

function getLocationKey(city) {
  fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      const location = data[0];
      getCurrentCondition(location);
    })
    .catch(err => console.log(err));
}

function getCurrentCondition(location) {
  fetch(`${BASE_URL}/currentconditions/v1/${location.Key}?apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const forecast = data[0];
      updateUI(location, forecast);
    })
    .catch((err) => console.log(err));
}

function updateUI(location, forecast) {
  document.getElementById("name").innerText = location.LocalizedName;
  document.getElementById("condition").innerText = forecast.WeatherText;
  document.getElementById("temperature").innerHTML = `${forecast.Temperature.Imperial.Value} &#8457`;
}
