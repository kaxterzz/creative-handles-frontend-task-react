import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfo, faToolbox, faBlog } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="#" onClick={props.handleNavbar}><span><FontAwesomeIcon icon={faHome} />&nbsp;</span>Home</a></li>
          <li><a href="#" onClick={props.handleNavbar}><span><FontAwesomeIcon icon={faInfo} />&nbsp;</span>About</a></li>
          <li><a href="#" onClick={props.handleNavbar}><span><FontAwesomeIcon icon={faToolbox} />&nbsp;</span>Services</a></li>
          <li><a href="#" onClick={props.handleNavbar}><span><FontAwesomeIcon icon={faBlog} />&nbsp;</span>Blog</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: white;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index:1;
  -webkit-box-shadow: 0 8px 6px -6px gray;
	   -moz-box-shadow: 0 8px 6px -6px gray;
	        box-shadow: 0 8px 6px -6px gray;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #B421FC;
    }
  }
`;

