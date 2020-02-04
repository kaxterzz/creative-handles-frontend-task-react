import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAddressCard,
  faFax
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {

  return (
    <div className="card-texts contact-info-card">
      <div className="titles">
        <h3>How to reach us</h3>
      </div>
      <p>
        <FontAwesomeIcon icon={faEnvelope} color="#b421fc" />
        &nbsp;kasunsmbox@hotmail.com
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} color="#b421fc" />
        &nbsp;+94702010363
      </p>
      <p>
        <FontAwesomeIcon icon={faFax} color="#b421fc" />
        &nbsp;+947070707070
      </p>
      <p>
        <FontAwesomeIcon icon={faAddressCard} color="#b421fc" />
        &nbsp;No.456/4/6,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School Road,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gohagoda,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Katugastota,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kandy,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20000,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sri Lanka
      </p>
    </div>
  );
}

export default ContactInfo;
