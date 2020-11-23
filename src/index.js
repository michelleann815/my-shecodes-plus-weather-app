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
  document.querySelector("#today-temp").innerHTML = Math.round(
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
axios.get(apiUrl).then((data) =>{
console.log(data); 
displayCurrentTemperature(data);
}) 

}

function convertToF () {
let temp = Number(document.querySelector("#today-temp").innerHTML);
// console.log ("temp",temp);
// console.log(typeof temp);
const fahrenheitResult = (temp*9/5) + 32;
// console.log("fahrenheit",fahrenheitResult);
document.querySelector("#today-temp").innerHTML = fahrenheitResult;
}

//create a function called convert to C 
//declaring a variable temp, selecting temperature ID with innerHTML replacing text and making sure it's a number not a string
//declare const for the temperature conversion equation fahrenheit --> celsius = celsius result
//selecting the text innerHTML with the ID of temperature and setting it equal to celsius result


let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", searchCity);

let fahrenheitButton = document.querySelector("#fahrenheit-link");
fahrenheitButton.addEventListener("click", convertToF);

// celsius Button equal to document query Selector with ID of celsius link
//add Event Listener to celsiusButton with function click convert to C 

//Features
let dateElement = document.querySelector("#todays-date-and-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//How to get the weather icons for openweathermap api
//https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
//var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
//data.data.weather[0].icon
//data.data.weather[0].description 

//create a  function and name it display weather info
//var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
//query select ID of weather icon and update the SRC to be weather icon url (refer to line 83 with the article)
//query select ID of weather description and update innerHTML text to data.data.weather[0].description 