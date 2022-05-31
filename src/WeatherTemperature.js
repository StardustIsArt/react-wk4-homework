import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)} </span>{" "}
        <span className="units">
          ºC |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)} </span>{" "}
        <span className="units">
          <a href="/" onClick={showCelsius}>
            {" "}
            <span className="celsiusUnit"> ºC</span>
          </a>
          <span className="fahrenheitUnit"> | ºF</span>
        </span>
      </span>
    );
  }
}
