
"use strict";
import React from 'react'
import ReactDOM from 'react-dom'



// Weather.getCurrent("Kansas City", function(current) {
//   console.log(
//     ["currently:",current.temperature(),"and",current.conditions()].join(" ")
//   );
// });
 
// Weather.getForecast("Kansas City", function(forecast) {
//   console.log("forecast high: " + forecast.high());
//   console.log("forecast low: " + forecast.low());
// });
 
// {json.stringify(Weather)}

// function submitButton(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// var element = <submitButton name="Kass" />;

// ReactDOM.render(
//   element,
//   document.getElementById('app')
// );



ReactDOM.render(
  <div>
    <h1>WeatherVote!</h1>
    <App />
  </div>,
  
  document.getElementById('app')
);
