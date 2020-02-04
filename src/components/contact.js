import React from "react";

import ContactInfo from "./contact-components/contact-info";
import Message from "./contact-components/message";
import Map from "./contact-components/map";

function Contact() {
  return (
    <div class="row">
      <div class="main-flex-style lr-spacing">
        <div class="card contact-card-width">
          <div className="contact-info-card-sub-flex">
            <ContactInfo />
            <Map />
          </div>
        </div>
        <div class="card contact-card-width">
          <div className="titles">
            <h3>Send us a Message</h3>
          </div>
          <Message />
        </div>
      </div>
    </div>
  );
}

export default Contact;
