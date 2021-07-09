function displayTemperature(response) {
  
  let temperatureElement=document.querySelector("#temperature");
  temperatureElement.innerHTML=math.round(response.data.main.temp);
}

let apiKey = "d3b0a871434ba42ee376c0c2172f7162";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metrics`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
