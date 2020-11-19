import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Features from "./Features/Features";
// import Header from "../CommonComponent/Header/Header";
import Speciality from "./Speciality/Speciality";
import Training from "./Training/Training";
import Footer from "../CommonComponent/Footer/Footer";
import Header from "../CommonComponent/Header/Header";
const Home = () => {
  return (
    <div>
      <Header callFrom="home" />main
      <Features />
      <AboutUs></AboutUs>
      <Training></Training>
      <Speciality></Speciality>
      <Footer></Footer>
    </div>
  );
};

export default Home;
