function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
  cityElement.innerHTML=response.data.name;
}

let apiKey = "29d488da5f7c3e2585b5dc3f2dd7f9f2";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metrics`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
