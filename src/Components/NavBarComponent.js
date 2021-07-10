import React from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

import "./NavBar.css";

const NavBarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link className="nav-links" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="nav-links" to="/about">
            {" "}
            About Us{" "}
          </Link>
          <Link className="nav-links" to="/todos">
            {" "}
            Todo App{" "}
          </Link>
        </Nav>
      </Navbar>

      {/*
                <ul className="NAvBar">
                        <li>
                            <Link to="/"> Home </Link>
                        </li>

                        <li>
                            <Link to="/about"> About Us </Link>
                        </li>


                        <li>
                            <Link to="/todos"> Todo App </Link>
                        </li>
                    </ul>
*/}

      <br />
    </div>
  );
};

export default NavBarComponent;
