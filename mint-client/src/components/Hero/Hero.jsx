import React from "react";
import { styled, Grid, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";

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
  fontSize: "1.5rem",
  marginTop: "20px",
  fontWeight: "bold",
  textTransform: "none",
  color: "black",
  "&:hover": {
    color: "#FFCC00",
  },
  ['@media (max-width:768px)']: {
    font: "normal normal 600 14px/7px Poppins",
    width: "37vw",
    height: '50px',
  },  
});

const TitleText = styled(Typography)({
  color: "white",
  font: "normal normal bold 60px/82px Poppins",
  fontWeight: "bold",
  maxWidth: "1400px",
  zIndex: 1,

  ['@media (max-width:768px)']: {
    font: "normal normal bold 26px/45px Poppins",
  },  
});

const GoldBarImgae = styled("img")({
  height: "4.5rem",
  marginLeft: "20px",
  verticalAlign: "middle",
  ['@media (max-width:768px)']: {
    height: "3rem",
  },  
});

const WrapLogo = styled("div")({
  
});

const WrapButton = styled("div")({
  
});

const LogoImage = styled("img")({
  ['@media (max-width:780px)']: {
    height: '20vmin',
},
});

const SunImg = styled('img')({
  position: 'absolute',
  height: '100vmin',
  // width: 'inherit',
  top: "-3vh",
  right: "0",
  ['@media (max-width:780px)']: {
      // height: '49vmin',
  },
});

const HeroSection = () => {
  return (
    <>
    <HeroContainer
      style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")', backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}
    >
      <SunImg src="assets/Main.svg" alt="sun" />
      <WrapLogo>
        <LogoImage src={"assets/logo.png"} alt="logo" />
      </WrapLogo>
      <TitleText>
        <span>
          From the dawn of history mankind has given value to coins through a
          backup reserve. The oldest and most reliable being
        </span>
        <GoldBarImgae src="assets/goldbar.png" alt="goldbar" />
      </TitleText>
      <BuyButton>{"Transfer/Buy"}</BuyButton>
      <Carousel/>
    </HeroContainer>

    
    {/* <HeroContainer
      style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")', backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}
    >
      <Grid item container xs={12}>
      <SunImg src="assets/Main.svg" alt="sun" />
        <Grid item xs={8}>
          <img src={"assets/logo.png"} alt="logo" />
        </Grid>
        <Grid item xs={4}>
          <img className="Cube-1" src={"/assets/Cube1.png"} alt="cube1" />
        </Grid>
      </Grid>
      <TitleText>
        <span>
          From the dawn of history mankind has given value to coins through a
          backup reserve. The oldest and most reliable being
        </span>
        <GoldBarImgae src="assets/goldbar.png" alt="goldbar" />
      </TitleText>
      <Grid item container xs={12}>
        <Grid item xs={10}>
          <BuyButton>{"Transfer/Buy"}</BuyButton>
        </Grid>
        <Grid item xs={2}>
          <img className="Cube-2" src={"/assets/Cube2.png"} alt="cube2" />
        </Grid>
      </Grid>
      <div>
        <Grid item container justifyContent={'flex-end'}>
          <Carousel/>
        </Grid>
      </div>
    </HeroContainer> */}
      </>
  );
};

export default HeroSection;
