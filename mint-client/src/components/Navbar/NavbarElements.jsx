import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, .7)' : 'rgba(0, 0, 0, 1)')};
  height: 80px;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  user-select: none;
  transition: 0.8s all ease;

  opacity: ${({show}) => (show ? 1 : 0)};
  /* opacity: 0.8; */
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 90%;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavLogoLink = styled(LinkR)`
  height: 100%;
  color: white;
  text-decoration-line: unset;
  display: flex;
`;

export const NavCounter = styled.div`

`

export const NavLogo = styled.img`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  width: 70px;
  margin: 5px 0;
  height: auto;
`;

export const NavSRGLogo = styled.img`
  color: #fff;
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 1.5rem;
  /* display: flex; */
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  width: 70px;
  margin: 13px 0 -5px 0;
  height: auto;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  /* height: 80px; */
  height: ${({button}) => (button ? "" : '90%')};
  @media screen and (min-width: 1600px) {
    min-width: 100px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 80px;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font: normal normal normal 16px/59px Poppins;
  font-weight: bold;


  &.active {
    border-bottom: 3px solid #FFCC00;
    color: #FFCC00;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

// export const LogoBg = styled.div`
//   background-image: url(${Logo});
//   background-position: center;
//   background-size: cover;
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 10vh;
//   width: 30%;
//   height: 31%;
// `;