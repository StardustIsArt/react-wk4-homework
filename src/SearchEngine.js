import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="searchEngine" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Enter a City..."
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
