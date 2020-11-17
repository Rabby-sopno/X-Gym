import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firstIcon from "../../../image/Group 80.png";
import secondIcon from "../../../image/Group 81.png";
import thirdIcon from "../../../image/Group 82.png";
import feature1 from "../../../image/feature1.jpg";
import feature2 from "../../../image/feature2.jpg";
import feature3 from "../../../image/feature3.jpg";
import SingleFeature from "./SingleFeature";

const Features = () => {
  const featureslist = [
    { id: 1, heading: "PROGRESSION", icon: firstIcon, bg: feature1 },
    { id: 2, heading: "WORKOUT", icon: secondIcon, bg: feature2 },
    { id: 3, heading: "NUTRITION", icon: thirdIcon, bg: feature3 },
  ];
  return (
    <Container style={{ margin: "30px auto" }} id="services">
      <Row>
        {featureslist.map((features) => (
          <SingleFeature key={features.id} features={features}></SingleFeature>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
