const API_KET = "6549303a99ecf540b8dedb1cf30bae76";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KET}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  alert("미안 오류");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);