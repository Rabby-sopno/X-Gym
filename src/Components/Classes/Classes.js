
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FakeData from "../../FakeData/FakeData";
import Footer from "../CommonComponent/Footer/Footer";
import Header from "../CommonComponent/Header/Header";
import "./Classes.css";

const Classes = () => {
  const [classes] = useState(FakeData);

  const history = useHistory();
  const handleRegistry = (item) => {
    history.push(`/classes/${item.id} `, { params: item });
  };

  return (
    <div>
      <Header callFrom="CLASSES"></Header>
      <section className="container mt-5">
        <div className="row">
          {classes.map((item) => (
            <div
              className="col-4"
              onClick={() => handleRegistry(item)}
              key={item.name}
              style={{ marginBottom: "30px" }}
            >
              <div>
                <img className="img-cls" src={item.image} alt="" />
                <h4 className="bg-warning bg-cls font-weight-bold mx-auto">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Classes;

