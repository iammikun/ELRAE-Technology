import React from "react";
import classes from "../Hero/Hero.module.css";
import heroImg from "../../Assests/heroImg.jpg";
import Socials from "../../Socials/Socials.jsx";

const Hero = () => {
  return (
    <div className={classes.main} id="hero">
      <div className={classes.heroContainer}>
        <div className={classes.heroContent}>
          <h1>Powering ICT infrastructures across Africa</h1>
          <p>
            Our diversified solutions deliver value across board, helping
            businesses thrive and individuals grow.
          </p>
          <Socials />
        </div>
        <div className={classes.heroImg}>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
