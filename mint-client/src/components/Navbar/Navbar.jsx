import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import navbarItems from "../../Data/Navbar";

import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavCounter,
} from "./NavbarElements.jsx";

// function App() {
//   return <div style={{ userSelect: "none" }}>Unselectable text</div>;
// }

const Navbar = ({
  toggle
}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [show, setShow] = useState(true);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  var scrollPos = 0;
  // adding scroll event
  

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.addEventListener('scrollUp', function(){

      // detects new state and compares it with the new one
      if ((document.body.getBoundingClientRect()).top > scrollPos){
        setShow(true)
        console.log("true")
      }
      else{
        setShow(false)
        console.log("false")
      }
      
        // saves the new position for iteration.
      scrollPos = (document.body.getBoundingClientRect()).top;
  });
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} show={show}>
          <NavbarContainer>
            <NavLogoLink to="/" onClick={toggleHome}>
              <NavLogo src="assets/logo.png" alt="illumi"/>
              <NavCounter></NavCounter>
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
            {navbarItems.map((item, index) => {          
                    return(
                        <NavItem>
                            <NavLinks
                            to={item.id}
                            smooth={true}
                            duration={500}
                            // aria-current= "location"
                            spy={true}
                            exact="true"
                            offset={item.offset}
                            >
                            {item.name}
                            </NavLinks>
                        </NavItem>
                    )
            })}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;