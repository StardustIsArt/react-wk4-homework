import "./Weather.css";
import "./SearchEngine";
import axios from "axios";
import React, { useState } from "react";
import SearchEngine from "./SearchEngine";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsbYZZUYnGhB2r7ULDdGWk4j4cCwpu3hAhg&usqp=CAU`,
      date: "Saturday 10:41 CST",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine />
        <h1>{weatherData.city}</h1>
        <ul className="conditions">
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <img
              className="sun-image"
              src={weatherData.iconUrl}
              alt="sunny"
              width={110}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}{" "}
            </span>{" "}
            <span className="units">ºC | ºF </span>
          </div>
          <div className="col-5">
            <ul className="pt-4">
              <li>
                Humidity:{" "}
                <span className="numericals">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="numericals">{weatherData.wind} </span>
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e1f92b0f0a53fe657eb50521404f459d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Weather is loading...";
  }
}
