const weather = document.querySelector(".weather span:nth-child(1)");
const city = document.querySelector(".weather span:nth-child(2)");

const API_KEY = "396cdae68a7936f2d7a525a9e8f5e27f";

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${Math.round(data.main.temp)} ℃`;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

/* 8.0 Geolocation
In JS, you can get your location with below code:
navigator.geolocation.getCurrentPosition();
getCurrentPosition() function requires two arguments:
First, function to call when successful,
Second, function to call when there is an error;

For the successCallbackFunction, JS provides the user's position as an argument;
From that position object, we can get the latitude and the longitude;
*/

/* 8.1 Weather API
API is how programs & apps communicate with each other;
With the langitude and longitude, we can use openweathermap.org API
to get City Name and temperature data;
When we have the API url, we can get data from the API url using fetch(url);
Since fetch() is a promise, meaning it can take quite some time depending what we are fetching,
we add then() to the fetch: fetch(url).then(response => response.json())
*/
