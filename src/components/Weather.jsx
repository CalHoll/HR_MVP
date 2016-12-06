
      // for loading screen:
      // <img src="./assets/spiffygif_46x46.gif" />

var Weather = ({weather, city}) => (
  <div className="weather-component">
    <div>
      <p>Current Weather in {city}: {weather}</p>
      <br/>
    </div>
  </div>
);

window.Weather = Weather;
