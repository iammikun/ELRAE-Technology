import React from "react";
import classes from "./Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className={classes.main}>
      <div className={classes.socialIcon}>
        <div className={classes.singleCol}>
          <a
            href="https://www.instagram.com/cykle__/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.facebook}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com/elrae.tech?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className={classes.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/Elrae_tech?t=aX3LNNHwtm9iPbMK2qewiw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.twitter}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/timilehin-onifara-80012522b/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkedin}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
