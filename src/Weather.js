import "./Weather.css";
import "./SearchEngine";
import axios from "axios";
import React, { useState } from "react";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <SearchEngine />
        <h1>New York</h1>
        <ul className="conditions">
          <li>Saturday 10:41 CST</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <img
              className="sun-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsbYZZUYnGhB2r7ULDdGWk4j4cCwpu3hAhg&usqp=CAU"
              alt="sunny"
              width={115}
            />
            <span className="temperature">{temperature} </span>{" "}
            <span className="units">ºC | ºF </span>
          </div>
          <div className="col-5">
            <ul className="pt-4">
              <li>
                Precipitation: <span className="numericals">15</span>%
              </li>
              <li>
                Humidity: <span className="numericals">72</span>%
              </li>
              <li>
                Wind: <span className="numericals">13 </span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e1f92b0f0a53fe657eb50521404f459d";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Weather is loading...";
  }
}
