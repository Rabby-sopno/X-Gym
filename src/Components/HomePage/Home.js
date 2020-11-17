import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Features from "./Features/Features";
import Header from "./Header/Header";
import Speciality from "./Speciality/Speciality";
import Training from "./Training/Training";
import Footer from "../CommonComponent/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <AboutUs></AboutUs>
      <Training></Training>
      <Speciality></Speciality>
      <Footer></Footer>
    </div>
  );
};

export default Home;
