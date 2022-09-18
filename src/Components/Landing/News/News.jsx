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
            <p>NLRC, Elrae Technologies to establish Nigerian National Game</p>
            <a
              href="https://guardian.ng/business-services/business/nlrc-elrae-technologies-to-establish-nigerian-national-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>See More</p>
            </a>
          </div>
          <div className={classes.boxTwo}>
            <p>
              Gbajabiamila, Elrae Technologies visit Ghana over plan to
              establish Nigerian National Game
            </p>
            <a
              href="https://dailypost.ng/2022/07/04/gbajabiamila-elrae-technologies-visit-ghana-over-plan-to-establish-nigerian-national-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>See More</p>
            </a>
          </div>
          <div className={classes.boxThree}>
            <p>
              {" "}
              National Lottery Game will generate employment for youths, create
              wealth – FG
            </p>
            <a
              href="https://businessday.ng/news/article/national-lottery-game-will-generate-employment-for-youths-create-wealth-fg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>See More</p>
            </a>
          </div>
          <div className={classes.boxFour}>
            <p>
              {" "}
              Nigeria will generate N1 billion monthly from the newly launched
              Nigeria National Games (NNG).
            </p>
            <a
              href="https://21stcenturychronicle.com/nigeria-to-benefit-n1bn-monthly-from-lottery-games/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>See More</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
