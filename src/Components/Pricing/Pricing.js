import React from "react";
import Footer from "../CommonComponent/Footer/Footer";
import Header from "../CommonComponent/Header/Header";
import feature1 from "../../image/feature1.jpg";
import feature2 from "../../image/feature2.jpg";
import feature3 from "../../image/feature3.jpg";
import PricePlan from "./PricePlan/PricePlan";
import { Container, Row } from "react-bootstrap";
const pricePlan = [
  { id: 1, plan: "advance plan", budget: "140", bg: feature1 },
  { id: 1, plan: "basic plan", budget: "120", bg: feature2 },
  { id: 1, plan: "beginers", budget: "90", bg: feature3 },
];

const Pricing = () => {
  return (
    <div>
      <Header callFrom="Pricing"></Header>
      <Container className="pricing p-3 my-5">
        <h2 className="text-center text-uppercase">
          <span className="text-warning">Choose the offer</span> thats suits you
        </h2>
        <div className="w-50 mx-auto p-2 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          adipisci. Ex alias id aspernatur molestiae laborum sunt placeat
          quisquam officia!
        </div>
        <Row>
          {pricePlan.map((plan) => (
            <PricePlan key={plan.id} plan={plan}></PricePlan>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Pricing;
