import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <h1>New York</h1>
      <ul className="">
        <li>Saturday 10:41 CST</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            className="sun-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsbYZZUYnGhB2r7ULDdGWk4j4cCwpu3hAhg&usqp=CAU"
          ></img>
        </div>
      </div>
    </div>
  );
}
