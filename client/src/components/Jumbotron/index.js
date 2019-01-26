import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>NYT Google Books Search</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/">
        Search for your favorite book, and save it for later
      </a>
    </div>
  );
}

export default Jumbotron;