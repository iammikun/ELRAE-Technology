import React from "react";
import classes from "./News.module.css";

const News = () => {
  return (
    <div className={classes.main} id="news">
      <div className={classes.newsContent}>
        <div className={classes.newsTxt}>
          <h2>News</h2>
          <p>Check out the latest on ELRAE from our media partners. </p>
        </div>
        <div className={classes.boxContainer}>
          <div className={classes.boxOne}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium reprehenderit vitae soluta accusantium non
            </p>
          </div>
          <div className={classes.boxTwo}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium reprehenderit vitae soluta accusantium non,
            </p>
          </div>
          <div className={classes.boxThree}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium reprehenderit vitae soluta accusantium non,
            </p>
          </div>
          <div className={classes.boxFour}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium reprehenderit vitae soluta accusantium non
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
