import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PricePlan = ({ plan }) => {
  console.log(plan);
  return (
    <Col>
      <div
        style={{
          backgroundImage: `url(${plan.bg})`,
          backgroundSize: "cover",
          minHeight: "500px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,.5)", height: "500px" }}
        >
          <div className="text-white text-center">
            <h6 className="text-uppercase">Billed Monthly</h6>
            <h2 className="text-uppercase">{plan.plan}</h2>
            <h1>${plan.budget}</h1>
            <div className="mx-auto">
              <ul
                className="d-inline-block"
                style={{ listStyle: "none", textAlign: "left" }}
              >
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Mobile-Optimize
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Best Hosting
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Free Custom
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Outstanding
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> Happy Customers
                </li>
              </ul>
            </div>
            <Link to="/registry">
              <Button variant="warning" className="px-5 py-2">
                PURCHASE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PricePlan;
