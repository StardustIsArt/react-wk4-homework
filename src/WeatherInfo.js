import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="conditions">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <img
            className="sun-image"
            src={props.data.iconUrl}
            alt={props.data.description}
            width={110}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}{" "}
          </span>{" "}
          <span className="units">ºC | ºF </span>
        </div>
        <div className="col-5">
          <ul className="pt-4">
            <li>
              Humidity:{" "}
              <span className="numericals">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span className="numericals">{props.data.wind} </span>
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 