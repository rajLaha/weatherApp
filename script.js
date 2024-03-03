let inputDistrict = document.querySelector("#inputDistrict");
let inputBtn = document.querySelector("#inputBtn");
let locationData = document.querySelector("#location");
let tempData = document.querySelector("#temprature");
let humaData = document.querySelector("#humadityData");
let windSD = document.querySelector("#windSpeedData");
let weatherImgIcon = document.querySelector(".weatherImgIcon");
let weathType = document.querySelector("#weatherType");

let district = "jaipur";
let appId = "5f8fafeed555af3ca721b2c7668a5f96";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const getDataWeather = async () => {
  const response = await fetch(URL + `&q=${district}` + `&appid=${appId}`);
  const data = await response.json();
  let locData = data.name;
  let tempratureData = Math.round(data.main.temp);
  let humadityData = data.main.humidity;
  let windSpeedData = data.wind.speed;
  let weatherType = data.weather[0].main;

  windSD.innerText = windSpeedData + ` m/s`;
  humaData.innerText = humadityData + `%`;
  tempData.innerText = tempratureData + `°c`;
  locationData.innerText = locData;
  weathType.innerText = weatherType;

  if (weatherType == "Clear") {
    weatherImgIcon.src = "images/clear.png";
  } else if (weatherType == "Clouds") {
    weatherImgIcon.src = "images/clouds.png";
  } else if (weatherType == "Drizzle") {
    weatherImgIcon.src = "images/drizzle.png";
  } else if (weatherType == "Mist" || weatherType == "Haze") {
    weatherImgIcon.src = "images/mist.png";
  } else if (weatherType == "Rain") {
    weatherImgIcon.src = "images/rain.png";
  } else if (weatherType == "Wind") {
    weatherImgIcon.src = "images/wind.png";
  } else if (weatherType == "Thunderstorm") {
    weatherImgIcon.src = "images/Thunderstorm.png";
  }
};

inputBtn.addEventListener("click", () => {
  district = inputDistrict.value;
  getDataWeather();
});

inputDistrict.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    inputBtn.click();
  }
});

getDataWeather();
