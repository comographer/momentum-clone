const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in ${lat}, ${lng}`);
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
