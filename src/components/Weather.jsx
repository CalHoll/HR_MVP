
var Weather = ({weather}) => (
  // !weather.id ? <img src="./assets/spiffygif_46x46.gif">Please wait...</img> :
  <div className="weather-component">
    
    <div>
      <p>IT'S SNOWING OF COURSE - Please wait for Summer...</p>
      <img src="./assets/spiffygif_46x46.gif" />
      <br/>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// Weather.propTypes = {
//   weather: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Weather = Weather; 