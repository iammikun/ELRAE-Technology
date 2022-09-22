import React, { useState } from "react";
import Logo from "./Logo/Logo.jsx";
import Nav from "./Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.main}>
      <header className={classes.headerContainer}>
        <Logo />
        <Nav toggle={toggle} />
        <div onClick={() => setToggle(!toggle)} className={classes.hamburger}>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
