import React, { useState, useEffect } from "react";
import { styled, Grid, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";
import PopupMint from "../Popup";
import MintDialog from "../Dialog";
import Aos from "aos";

const HeroContainer = styled("div")({
  width: "86vw",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  zIndex: "1",
  overflow: "hidden",
  padding: "5vh 7vw",
  ['@media (max-width:768px)']: {
    padding: "3vh 7vw",
  },  
});

const BuyButton = styled(Button)({
  width: "280px",
  height: "80px",
  background: "#FFCC00 0% 0% no-repeat padding-box",
  border: "2px solid #FFCC00",
  borderRadius: "8px",
  boxShadow: "2px 2px 20px #FFCC00",
  font: "normal normal normal 700 1.5rem/7px Poppins",
  marginTop: "20px",
  textTransform: "none",
  color: "black",
  "&:hover": {
    color: "#FFCC00",
  },
  ['@media (max-width:768px)']: {
    font: "normal normal 600 14px/7px Poppins",
    width: "37vw",
    height: '50px',
    marginBottom: '15px',
  },  
});

const TitleText = styled(Typography)({
  color: "white",
  font: "normal normal bold 48px/82px Poppins",
  fontWeight: "bold",
  maxWidth: "1400px",
  zIndex: 1,

  ['@media (max-width:1440px)']: {
    font: "normal normal bold 38px/70px Poppins;",
  },  
  ['@media (max-width:768px)']: {
    font: "normal normal bold 26px/45px Poppins",
  },  
});

const GoldBarImgae = styled("img")({
  height: "4.5rem",
  marginLeft: "20px",
  verticalAlign: "middle",

  ['@media (max-width:1440px)']: {
    font: "3.5rem",
  },  
  ['@media (max-width:768px)']: {
    height: "3rem",
  },  
});

const WrapLogo = styled("div")({
  
});

const LogoImage = styled("img")({
  ['@media (max-width:780px)']: {
    height: '20vmin',
},
});

const SunImg = styled('img')({
  position: 'absolute',
  height: '110vmin',
  top: "0",
  right: "0",
  zIndex: 0,
  ['@media (max-width:769px)']: {
    height: '80vmin',
  },
  ['@media (max-width:425px)']: {
    height: '110vmin',
  },
});

const CubeImg1 = styled('img')((props) => ({
  position: 'absolute',
  left: '34vw',
  top: '22vh',
  ['@media (max-width:768px)']: {
    left: '12vw',
    height: '33vmin',
    top: '24vh',
  },
}))

const CubeImg2 = styled('img')((props) => ({
  position: 'absolute',
  left: '75vw',
  top: '70vh',
  ['@media (max-width:768px)']: {
    // left: '60vw',
    height: '13vmin',
    top: '64vh',
  },
}))

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: "300" });
  }, []);
  // controls if popup displays
  const [dialog, setDialog] = useState(false)
  // adds class to darken background color
  const duringPopUp = dialog ? " during-popup" : ""

  return (
    <>
    <HeroContainer
      style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")', backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}
    >
      <SunImg src="assets/Main.svg" alt="sun" />
      <CubeImg1 className="Cube-1" src={"/assets/Cube1.png"} alt="cube1" />
      <CubeImg2 className="Cube-2" src={"/assets/Cube2.png"} alt="cube2" />
      <WrapLogo data-aos="fade-down">
        <LogoImage src={"assets/logo.png"} alt="logo" />
      </WrapLogo>
      <TitleText data-aos="fade-right" data-aos-delay="1000">
        <span>
          From the dawn of history mankind has given value to coins through a
          backup reserve.<br/> The oldest and most reliable being
        </span>
        <GoldBarImgae src="assets/goldbar.png" alt="goldbar" data-aos="zoom-in" data-aos-delay="2500"/>
      </TitleText>
      <BuyButton onClick={()=>setDialog(true)} data-aos="fade-right" data-aos-delay="3000">{"Transfer/Buy"}</BuyButton>
      <Carousel />
    </HeroContainer>
    {dialog && <MintDialog setDialog={setDialog}/>}
      </>
  );
};

export default HeroSection;
