import React from "react";
import classes from "./Careers.module.css";

const Careers = () => {
  return (
    <div className={classes.main} id="careers">
      <div className={classes.careerContainer}>
        <div className={classes.careerTxt}>
          <h2>Careers</h2>
          <span></span>
          <p>
            We believe work is an opportunity to impact your world. Think you
            have what it takes to change Africa?
          </p>
        </div>
        <a href="mailto:technical@elraetechnologies.com">
          <button>JOIN US</button>
        </a>
      </div>
    </div>
  );
};

export default Careers;
