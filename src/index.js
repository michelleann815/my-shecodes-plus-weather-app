//Functions
function formatDate(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}  ${hours} : ${minutes}`;
}

function displayCurrentTemperature(response) {
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#search-city-input").innerHTML = response.data.name;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchCityInput.value}`;
  let apiKey = "5888f249350e3151a80f06ae9f2e6ba9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentTemperature);
}

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", searchCity);

//Features
let dateElement = document.querySelector("#todays-date-and-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
