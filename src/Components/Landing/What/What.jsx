import React from "react";
import classes from "./What.module.css";

const What = () => {
  return (
    <div className={classes.main} id="whatwedo">
      <div className={classes.whatContainer}>
        <div>
          <h2>Everything we do.</h2>
        </div>
        <div className={classes.whatFlex}>
          <div className={classes.leftFlex}>
            <div>
              <h3>CAPACITY DEVELOPMENT</h3>
              <p>
                We utilize our experiences as entrepreneurs and technologists to
                deploy resources for identifying and co-building innovative tech
                start-ups, by providing programs geared towards achieving
                massive social impact. These programs are focused on developing
                human capacity and excellent entrepreneurship virtues.
              </p>
            </div>
          </div>
          <div className={classes.rightFlex}></div>
        </div>
      </div>
    </div>
  );
};

export default What;
