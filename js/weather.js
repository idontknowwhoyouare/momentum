const API_KEY = "22c85da932e7db0e23e9c71193675378";

function onGeoOk(blank) {
    const lat = blank.coords.latitude;
    const lon = blank.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");  
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);