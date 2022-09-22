import React from "react";
import classes from "./Logo.module.css";
import Elrae from "../../../Assests/Elrae Logo.jpeg";

const Logo = () => {
  return (
    <div className={classes.main}>
      <div className={classes.headerContainer}>
        <div className={classes.logoNav}>
          <a href="/#">
            <img src={Elrae} alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;
