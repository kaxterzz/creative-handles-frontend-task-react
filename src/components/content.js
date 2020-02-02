import React, { useState, useEffect } from 'react'
import Navbar from './navbar/Navbar';
import SlideShow from './slideshow';
import Posts from './posts';
import Contact from './contact';
import GlobalStyle from '../styles/Global';
import '../styles/styles.scss'


function Content() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div class="main-wrapper">
            <div class="header">
                <Navbar
                    navbarState={navbarOpen}
                    handleNavbar={handleNavbar}
                />
            </div>
            <div class="slider">
                <SlideShow />
            </div>
            <div class="posts">
                <Posts/>
            </div>
            <div class="contact">
                <Contact/>
            </div>
            <GlobalStyle />
        </div>
    );
}

export default Content