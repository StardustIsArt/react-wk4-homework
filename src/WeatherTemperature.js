import React from "react";
import "./WeatherForecast.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{Math.round(props.fahrenheit)} </span>{" "}
      <span className="units">ºF</span>
    </span>
  );
}
