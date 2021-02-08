import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4 ">
        <a className="navbar-brand" href="#">
          E-Learning
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-link">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: " blue " }}
                to="/signup"
                className="nav-link"
              >
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
