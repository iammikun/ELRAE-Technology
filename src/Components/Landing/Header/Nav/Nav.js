import React from 'react'
import classes from "./Nav.module.css";

const Nav = ({ toggle }) => {
    return (
        <div className={classes.main}>
            <div className={!toggle ? classes.navContainer : classes.showNav} >
                <nav className={classes.navLinks}>
                    <ul className={classes.leftNavLinks}>
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
                </nav>
                <nav className={classes.navBtns}>
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
                </nav>
            </div>
        </div>
    )
}

export default Nav