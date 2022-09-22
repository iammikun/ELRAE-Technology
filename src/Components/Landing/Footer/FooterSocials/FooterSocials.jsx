import React from "react";
import classes from "./FooterSocials.module.css";
import Socials from "../../../Socials/Socials.jsx";

const FooterSocials = () => {
  return (
    <div className={classes.main}>
      <div className={classes.FooterSocials}>
        <a href="/#hero" className={classes.fooSoc}>
          <h1>Elrae</h1>
        </a>
        <div className={classes.fooSoc}>
          <h4>Address</h4>
          <p>Victoria Ironsi Street,</p>
          <p>41 Crescent,</p>
          <p>Gwarinpa Estate,</p>
          <p>Abuja</p>
        </div>
        <div className={classes.fooSoc}>
          <h4>Follow Us</h4>
          <Socials className={classes.changeOf} />
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;
