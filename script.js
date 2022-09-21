function search() {
  cityname = city.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5b4bee0ba241d092159faf007e166080`
  )
    .then((res) => res.json())
    .then((data) => displayWeather(data));
}
// 

function displayWeather(cityDetails) {

  cityName = cityDetails.name;
  temperature = cityDetails.main.temp;
  weathercondition = cityDetails.weather[0].description;
  windspeed = cityDetails.wind.speed;
  lattitude = cityDetails.coord.lat;
  longitude = cityDetails.coord.lon;
  

let t=new Date()
let time1 = `Time : ${t.getHours(cityDetails.dt * 1000)}:${t.getMinutes(cityDetails.dt * 1000)}`;


if (
  t.getHours(cityDetails.dt * 1000) > 6 &&
  t.getHours(cityDetails.dt * 1000)<19
) {
  html1 = `<img src="./image/morning.jpg"  class="time0 card-img-top">  `;
  image.innerHTML = html1;
}

else {

  html1 = `<img src="./image/night.jpg"  class="time0 card-img-top">  `;
  image.innerHTML = html1;
}



htmldata = `<div class="text-muted text-uppercase text-center data">
      <h5 class="my-3">${cityName}</h5>
      <div class="my-3">
      <span>${Math.round(((temperature - 273) * 100) / 100).toFixed(2)}</span>
      <span>&deg;C</span>
      </div>
      <div class="my-3">${time1}</div>     
      <div class="my-3">${weathercondition}</div>
      <div class="my-3">Wind speed : ${windspeed}</div>
      <div class="my-3">lattitude : ${lattitude}</div>
      <div class="my-3">longitude : ${longitude}</div>`;
      data.innerHTML = htmldata

    }

     







