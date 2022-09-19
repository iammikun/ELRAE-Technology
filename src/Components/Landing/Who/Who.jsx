import React from "react";
import classes from "./Who.module.css";

const SectionOne = () => {
  return (
    <div className={classes.main} id="about">
      <div className={classes.sectionOneContainer}>
        <div className={classes.sectionOneContent}>
          <h2>Who we are</h2>
          <p>
            At ELRAE we are driven by our passion for creating technology
            solutions that empower individuals, businesses, and communities with
            diverse needs. We are problem solvers, technologist and optimists of
            a better future for Africa.
          </p>
        </div>
        <div className={classes.flexContainer}>
          <div className={classes.textContainer1}>
            <h4>MISSION</h4>
            <p>
              Leverage modern technology to create solutions for seamless
              exchange of value through data.
            </p>
          </div>
          <div className={classes.textContainer}>
            <h4>VISION</h4>
            <p>
              Do everything possible to maximise Africa's potentials through
              innovation and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
