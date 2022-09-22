import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.main}>
      <div className={classes.headerContainer}>
        <div className={classes.logoNav}>
          <a href="/#">
            <h1>Elrae</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;
