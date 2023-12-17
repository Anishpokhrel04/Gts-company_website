import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import VideoDiv from "./Components/VideoDiv/VideoDiv";
import About from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import OurTeam from "./Components/OurTeam/OurTeam";
import Services from "./Components/OurService/Services";
import Contact from "./Components/Contact/Contact";
import Expertise from "./Components/OurExpertise/Expertise";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <VideoDiv />
      <About/>
      <Services/>
      <Expertise/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default HomePage;
