import React, { useEffect, useState } from "react";
import { FaBars, FaFile } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import navbarItems from "../../Data/Navbar";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";

import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogo,
  NavSRGLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavCounter,
} from "./NavbarElements.jsx";
import { yellow } from "@mui/material/colors";
import { WhitePaperButton } from "../../ButtonElements";

// function App() {
//   return <div style={{ userSelect: "none" }}>Unselectable text</div>;
// }

const Navbar = ({
  toggle
}) => {
  const state = {
    value: 150,
    
  };
  const [num, setNum] = useState(150000000 * 0.12);
  const [scrollNav, setScrollNav] = useState(false);
  const [show, setShow] = useState(true);
  const formatValue = num => `$ ${Number(num).toFixed(0)}`;

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
              <NavLogo onClick={() => setNum((state) => state + 50)} src="assets/logo.png" alt="illumi"/>
              <div style={{display: "grid"}}>
                <NavSRGLogo onClick={() => setNum((state) => state + 50)} src="assets/navbar/SRGLogo.svg" alt="illumi"/>
                <AnimatedNumber
                  value={num}
                  hasComma={true}
                  size={16}
                  duration={300}
                />
              </div>
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <div>
                {/* <WhitePaperButton>{"White Paper"}</WhitePaperButton> */}
                <FaBars />
              </div>
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
            <NavItem>
                <WhitePaperButton>{"White Paper"}</WhitePaperButton>
            </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;