function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windELement = document.querySelector("#wind");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = math.round(response.data.wind.speed);
}

let apiKey = "335600f837dbc92edc2599da33a2cd89";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metrics`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
