import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ReactBootStrap.Navbar

        fixed="top"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "rgba(37, 26, 26, 1)" }}

        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          <span style={{ fontWeight: "bold" }}>
            POWER <span style={{ color: "yellow" }}>X</span>
          </span>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto text-white">
            <Link to="/Home">

              <ReactBootStrap.Nav.Link href="#home">
                Home
              </ReactBootStrap.Nav.Link>
            </Link>

            <ReactBootStrap.Nav.Link href="#services">
              Services
            </ReactBootStrap.Nav.Link>

            <Link to="/classes">
              <ReactBootStrap.Nav.Link href="#classes">
                Our Classes
              </ReactBootStrap.Nav.Link>
            </Link>

            <ReactBootStrap.Nav.Link href="#about">
              About us
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link href="#blog">Blog</ReactBootStrap.Nav.Link>

            <Link to="/pricing">
              <ReactBootStrap.Nav.Link href="#pricing">
                Pricing
              </ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.Nav.Link href="#contact">
              Contact us
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navbar;
