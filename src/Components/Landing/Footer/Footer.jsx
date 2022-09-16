import React from "react";
import classes from "./Footer.module.css";
import FooterSocials from "../Footer/FooterSocials/FooterSocials.jsx";

const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <div className={classes.footerContent}>
          <h4>About</h4>
          <p>
            <a href="/">Support</a>
          </p>
          <p>
            <a href="/">Help Center</a>
          </p>
          <p>
            <a href="/">Contact Us</a>
          </p>
        </div>
        <div className={classes.footerContent}>
          <h4>Resources</h4>
          <p>
            <a href="/">Why ELRAE</a>
          </p>
          <p>
            <a href="/">Terns of Use</a>
          </p>
          <p>
            <a href="/">Team</a>
          </p>
          <p>
            <a href="/">Pricing</a>
          </p>
        </div>
        <div className={classes.footerContent}>
          <h4>Resources</h4>
          <p>
            <a href="/">Why ELRAE</a>
          </p>
          <p>
            <a href="/">Terns of Use</a>
          </p>
          <p>
            <a href="/">Team</a>
          </p>
          <p>
            <a href="/">Pricing</a>
          </p>
        </div>
        <div className={classes.footerContent}>
          <h4>Resources</h4>
          <p>
            <a href="/">Why ELRAE</a>
          </p>
          <p>
            <a href="/">Terns of Use</a>
          </p>
          <p>
            <a href="/">Team</a>
          </p>
          <p>
            <a href="/">Pricing</a>
          </p>
        </div>
      </div>
      <hr />
      <FooterSocials />
    </div>
  );
};

export default Footer;
