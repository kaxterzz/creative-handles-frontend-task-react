import React, { useState } from "react";
import Navbar from "./navbar/navBar";
import SlideShow from "./slideshow";
import Posts from "./posts";
import Contact from "./contact";
import Footer from "./footer";

function Content() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div class="">
      <div className="row">
        <div className="col-12">
          <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
        </div>
      </div>

      <div className="row">
        <div className="col-12" style={{ padding: 0 }}>
          <SlideShow />
        </div>
      </div>

      <div className="row">
        <div className="col-12" style={{ marginTop: '25px' }}>
          <div className="titles">
            <h1>Latest posts</h1>
          </div>
          <Posts />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="titles">
            <h1>Contact Us</h1>
          </div>
          <Contact />
        </div>
      </div>

      <div className="row">
        <div className="col-12" style={{ padding: 0 }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;
