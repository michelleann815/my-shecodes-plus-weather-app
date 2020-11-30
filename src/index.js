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
  let h1 = document.querySelector("h1");
   h1.innerHTML = `${response.data.name}`;
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#today-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#search-city-input").innerHTML = response.data.name;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#current-description").innerHTML = response.data.weather[0].description;
  document.querySelector("#weather-icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function searchCity(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchCityInput.value}`;
  let apiKey = "5888f249350e3151a80f06ae9f2e6ba9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityInput.value}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then((data) =>{
console.log(data); 
displayCurrentTemperature(data);
}) 

}

function convertToF () {
let temp = Number(document.querySelector("#today-temp").innerHTML);
// console.log ("temp",temp);
// console.log(typeof temp);
const fahrenheitResult = Math.round(temp*9/5) + 32;
// console.log("fahrenheit",fahrenheitResult);
document.querySelector("#today-temp").innerHTML = fahrenheitResult;
  fahrenheitButton.removeEventListener("click", convertToF);
  celsiusButton.addEventListener("click", convertToC);
}
function convertToC () {
  let temp= Number(document.querySelector("#today-temp").innerHTML);
  const celsiusResult = Math.round(((temp-32)*5)/9);
  document.querySelector("#today-temp").innerHTML = celsiusResult;
  fahrenheitButton.addEventListener("click", convertToF);
  celsiusButton.removeEventListener("click", convertToC);
}

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", searchCity);

let fahrenheitButton = document.querySelector("#fahrenheit-link");
fahrenheitButton.addEventListener("click", convertToF);

let celsiusButton = document.querySelector("#celsius-link");
celsiusButton.addEventListener("click", convertToC);

//Geolocation
function retrievePosition(position) {
  let apiKey = "5888f249350e3151a80f06ae9f2e6ba9";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayCurrentTemperature);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

 //Date and Time
let dateElement = document.querySelector("#todays-date-and-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);