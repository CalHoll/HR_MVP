
"use strict";
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <h1>WeatherVote!</h1>
    <h2>TEST</h2>
    <App weather = {window.WEATHER_API_KEY} />
  </div>,
  
  document.getElementById('app')
);
