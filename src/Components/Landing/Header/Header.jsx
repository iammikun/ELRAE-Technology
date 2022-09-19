import React from "react";
import classes from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={classes.main}>
      <div className={classes.headerContainer}>
        <div className={classes.logoNav}>
          <a href="/#">
            <h1>Elrae</h1>
          </a>
          <ul className={classes.navLinks}>
            <li>
              <a href="/#hero">Home</a>
            </li>
            <li>
              <a href="/#about">Who We Are</a>
            </li>
            <li>
              <a href="/#whatwedo">What We Do</a>
            </li>
            <li>
              <a href="/#news">News</a>
            </li>
          </ul>
        </div>
        <div className={classes.navBtns}>
          <ul className={classes.rightNavLinks}>
            <li>
              <a href="/#careers">Careers</a>
            </li>
            <li>
              <a href="/#Login">Login</a>
            </li>
          </ul>
          <a href="mailto:technical@elraetechnologies.com" type="button">
            <button>Join Us</button>
          </a>
        </div>
        <div className={classes.hamburger}>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
