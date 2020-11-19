import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderContent from "../../HomePage/HeaderContent/HeaderContent";

const Header = ({ callFrom }) => {
  console.log(callFrom);
  return (
    <header className="header">
      <Container>
        <Navbar className="navbar" />
        <div
          className="d-flex align-items-center justify-content-center"
          style={
            callFrom === "home"
              ? { minHeight: "90vh", backgroundPosition: "top" }
              : { minHeight: "45vh", backgroundPosition: "center 10%" }
          }
        >
          {callFrom === "home" ? (
            <HeaderContent />
          ) : (
            <h1 style={{ zIndex: "1000" }} className="text-center text-white">
              {callFrom}
            </h1>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
