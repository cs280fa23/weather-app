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
  // TODO get the "location key" for the given `city`!
  //  then call getCurrentCondition to retrieve weather forecast for it!
  console.log(city);
}

function getCurrentCondition(location) {
  // TODO get the "current condition" based on the `location` argument!
  //  then call updateUI to update the UI!
}

function updateUI(location, forecast) {
  // TODO update the following based on `location` and `forecast` arguments!
  document.getElementById("name").innerText = "City Name";
  document.getElementById("condition").innerText = "Weather Condition";
  document.getElementById("temperature").innerText = "Temperature";
}
