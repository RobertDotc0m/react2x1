import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialButton = () => {
  return (
    <>
      <div className="masivo">
        <div className="icono">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="icono">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className=" icono">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </>
  );
};

export default SocialButton;
