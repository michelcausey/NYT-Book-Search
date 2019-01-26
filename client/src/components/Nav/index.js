import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-light"> <h2>Google Books Search App</h2>
      <a className="navbar-brand" href="/">
        Search Page
      </a>
      <a className = "navbar-brand" href="/api/books">My Saved Books</a>
    </nav>
  );
}

export default Nav;
