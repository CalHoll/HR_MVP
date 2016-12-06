

var apiUrl = "http://api.openweathermap.org/data/2.5/"

var fetchWeather = function(city) {
  console.log('FETCHING THE WEATHER FROM WITHIN WEATHERAPI')
  var weeklyWeatherUrl = 'api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=' + WEATHER_API_KEY; 
    // `${apiUrl}/forecast/daily?q=${city}&units=metric&cnt=7&appid=${WEATHER_API_KEY}`

  return fetch(weeklyWeatherUrl)
    .then((response) => response.json()
    .then((responseJson) => {
        console.log('RESPONSE FROM WEATHER SERVER: ' + responseJson);
        return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    }));
}


window.fetchWeather = fetchWeather;