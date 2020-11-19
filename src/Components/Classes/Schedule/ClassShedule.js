import React from "react";
import "./ClassShedule.css";
import image from "../../../image/advanced.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClassShedule = () => {
  const dateStyle = {
    boxShadow: "1px 1px 6px 1px #695050",
    margin: "20px 0",
    padding: "10px",
  };
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img className="h-auto w-100" src={image} alt="" />
        </Col>
        <Col md={6}>
          <h1 className="text-left mb-3">
            <span className="text-warning ">Class</span> Schedule{" "}
          </h1>
          <Row className="">
            <Col md={6}>
              {["Monday", "Wednesday", "Friday"].map((day) => (
                <div style={dateStyle}>
                  <h3>{day}</h3>
                  <small>9.00 Am - 10.00 Am</small>
                </div>
              ))}
            </Col>
            <Col md={6}>
              {["Tuesday", "Thursday", "Saterday"].map((day) => (
                <div style={dateStyle}>
                  <h3>{day}</h3>
                  <small>9.00 Am - 10.00 Am</small>
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex align-items-end mb-5">
        <Col md={6}>
          <p className=" text-justify">
            formation is here adipisicing elit. Omnis quibusdam sequi iure
            perspiciatis asperiores totam. Cupiditate atque nobis eligendi
            tenetur amet quos in, provident labore enim quia quod, vel odit.
            formation. Omnis quibusdam sequi iure perspiciatis asperiores totam.
            Cupiditate atque nobis eligendi tenetur amet quos in, provident
            labore enim quia quod, vel odit.
          </p>

          <ul className="mt-5" style={{ listStyle: "none" }}>
            <li>
              <FontAwesomeIcon className="font mr-3" icon={faCheckSquare} />
              Having Simmer Shapely Thighs
            </li>
            <li>
              <FontAwesomeIcon className="font mr-3" icon={faCheckSquare} />
              Getting Stronger Body
            </li>
            <li>
              <FontAwesomeIcon className="font mr-3" icon={faCheckSquare} />
              Increased Metabolism
            </li>
            <li>
              <FontAwesomeIcon className="font mr-3" icon={faCheckSquare} />
              Increased Muscular Endurance
            </li>
            <li>
              <FontAwesomeIcon className="font mr-3" icon={faCheckSquare} />
              Maximum Result In Less Time
            </li>
            <li>
              <FontAwesomeIcon className="font mr-3" icon={faCheckSquare} />
              Firm Hips and Tummy
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <Link to="/pricing">
            <Button variant="warning px-5 py-2"> JOIN US</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ClassShedule;
