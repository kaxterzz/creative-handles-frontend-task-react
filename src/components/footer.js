import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMugHot, faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div class="main-flex-style">
      <div class="footer-card footer">
        <p class="text-center">
          Made with <FontAwesomeIcon icon={faHeart} color="#E81333" /> and{" "}
          <FontAwesomeIcon icon={faMugHot} color="#B00E26" /> by
          Kasun <FontAwesomeIcon icon={faCopyright} color="#b421fc" /> 2020
        </p>
      </div>
    </div>
  );
}

export default Footer;
