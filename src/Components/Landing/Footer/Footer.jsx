import React from "react";
import classes from "./Footer.module.css";
import FooterSocials from "../Footer/FooterSocials/FooterSocials.jsx";

const Footer = () => {
  return (
    <div className={classes.main} id="Login">
      <div className={classes.footer}>
        <h2>Get in Touch</h2>
      </div>
      <form className={classes.form}>
        <input type="text" placeholder="Full Name" />
        <div className={classes.diffInput}>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <a href="mailto:technical@elraetechnologies.com" type="button">
          <button>SEND MESSAGE</button>
        </a>
      </form>
      <hr />
      <FooterSocials />
    </div>
  );
};

export default Footer;
