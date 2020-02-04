import React, { useState, useEffect } from 'react'
import Navbar from './navbar/Navbar';
import SlideShow from './slideshow';
import Posts from './posts';
import Contact from './contact';


function Content() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div class="">
            <div className="row">
                <div className="col-12">
                    <Navbar
                        navbarState={navbarOpen}
                        handleNavbar={handleNavbar}
                    />
                </div>
            </div>
            
            <div className="row">
                <div className="col-12" style={{padding:0}}>
                    <SlideShow />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Posts/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Contact/>
                </div>
            </div>

        </div>
    );
}

export default Content