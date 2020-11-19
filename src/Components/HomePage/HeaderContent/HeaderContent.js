import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  const headerContentStyle = {
    color: "white",
    minHeight: "75vh",
    textAlign: "left",
    alignItems: "center",
  };

  return (
    <Row style={headerContentStyle} id="home">
      <Col md={6}>
        <h1>
          THE BEST FITNESS <br /> STUDIO IN TOWN
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aut
          labore. Natus laborum quo totam facilis necessitatibus beatae officia
          vero, maiores excepturi cupiditate unde sapiente adipisci, iste fuga
          consectetur? Explicabo.
        </p>
        <Link to="/pricing">
          <Button
            variant="warning"
            style={{ padding: "10px 30px", fontSize: "18px" }}
          >
            Join Us
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default HeaderContent;
