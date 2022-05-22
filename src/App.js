import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="titleName">React Weather App</h1>
        <Weather />
        <footer className="footer">
          <h6>
            This project was coded by
            <a
              href="https://yociusefx.myportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Samantha Yocius
            </a>{" "}
            & openly sourced on
            <a
              href="https://github.com/StardustIsArt/react-wk4-homework"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>
          </h6>
        </footer>
      </div>
    </div>
  );
}

export default App;
