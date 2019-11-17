import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              WEB422 - Assignment 4 - Mehedi Haque
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
