import React from "react";
import classes from "../Landing/Landing.module.css";
import Header from "../Landing/Header/Header.jsx";
import Hero from "../Landing/Hero/Hero.jsx";
import Who from "../Landing/Who/Who.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import News from "../Landing/News/News.jsx";
import Careers from "../Landing/Careers/Careers.jsx";
import Footer from "../Landing/Footer/Footer.jsx";

const Landing = () => {
  return (
    <div className={classes.main}>
      <div>
        <Header />
        <Hero />
        <Who />
        <Carousel />
        <News />
        <Careers />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
