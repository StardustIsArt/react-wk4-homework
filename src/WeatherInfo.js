import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={10} />
            <span className="temperature">
              {Math.round(props.data.temperature)}{" "}
            </span>{" "}
            <span className="units">ºC | ºF </span>
          </div>
        </div>
        <div className="col-5">
          <ul className="pt-4">
            <li>
              Humidity: {props.data.humidity}%
            </li>
            <li>
              Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
