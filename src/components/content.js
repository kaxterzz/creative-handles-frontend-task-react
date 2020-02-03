import React, { useState, useEffect } from 'react'
import Navbar from './navbar/Navbar';
import SlideShow from './slideshow';
import Posts from './posts';
import Contact from './contact';
import GlobalStyle from '../styles/Global';
import '../styles/styles.scss'
import '../styles/k-grid.css'


function Content() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div class="">
            <div class="row">
                <div class="col-12">
                    <Navbar
                        navbarState={navbarOpen}
                        handleNavbar={handleNavbar}
                    />
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <SlideShow />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <Posts/>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <Contact/>
                </div>
            </div>

        </div>
    );
}

export default Content