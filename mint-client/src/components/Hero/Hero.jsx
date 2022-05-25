import React, { useState, useEffect } from "react";
import { styled, Grid, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";
import MintDialog from "../Dialog";
import Aos from "aos";
import {ProgressBar} from "react-progressbar-fancy";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import "./Counter.css"

// import Number from "./Number";

const HeroContainer = styled("div")({
  width: "86vw",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  zIndex: "1",
  overflow: "hidden",
  padding: "5vh 10vw",
  ['@media (max-width:768px)']: {
    padding: "3vh 7vw",
  },  
});

const BuyButton = styled(Button)({
  width: "250px",
  height: "80px",
  background: "#FFCC00 0% 0% no-repeat padding-box",
  border: "2px solid #FFCC00",
  borderRadius: "8px",
  boxShadow: "2px 2px 20px #FFCC00",
  font: "normal normal normal 700 1.5rem/7px Poppins",
  marginTop: "20px",
  textTransform: "none",
  color: "black",
  marginBottom: "45px",
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
  left: '88vw',
  top: '14vh',
  width: '134px',
  height: '134px',
  ['@media (max-width:768px)']: {
    left: '12vw',
    height: '28vmin',
    top: '24vh',
  },
}))

const CubeImg2 = styled('img')((props) => ({
  position: 'absolute',
  left: '81vw',
  top: '56vh',
  width: '50',
  height: '113px',
  ['@media (max-width:768px)']: {
    height: '17vmin',
    top: '64vh',
  },
}))

const WrapNumbers = styled('div')({
  ['@media (min-width:1440px)']: {
    marginBottom: "-35vh",
  },  
})

const HeroSection = () => {
  const supply = 150000000
  const [num, setNum] = useState(150000000 * 0.12);
  const [percent, setPercent] = useState(75000000 / supply * 100)
  const [size, setSize] = useState(window.screen.width > 768 ? 40 : 22);
  const [processWidth, setProcessWidth] = useState(window.screen.width > 1570 ? "56%" : window.screen.width > 768 ? "63%" : "100%");

  const changeFonts = () => {
    let width = window.screen.width
    console.log(width)
    if(width > 1570){
      //Big Desktop
      setSize(40)
      setProcessWidth("56%")
    }
    else if(width > 768){
      //small Desktop
      setSize(40)
      setProcessWidth("63%")
    }
    else{
      //mobile
      setSize(22)
      setProcessWidth("100%")
    }    
  };


  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.addEventListener("resize", changeFonts);
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
      <SunImg src="assets/MainHeaderLinesGoldCircle.svg" alt="sun" />
      <CubeImg1 className="Cube-1" src={"/assets/Cubes/GoldCube1.svg"} alt="cube1" />
      <CubeImg2 className="Cube-2" src={"/assets/Cubes/GoldCube2.svg"} alt="cube2" />
      {/* <WrapLogo data-aos="fade-down">
        <LogoImage src={"assets/logo.png"} alt="logo" />
      </WrapLogo> */}
      <TitleText data-aos="fade-right" data-aos-delay="1000">
        <span>
          From the dawn of history mankind has given<br/> value to coins through a
          backup reserve.<br/> The oldest and most reliable being <span data-aos="zoom-in" data-aos-delay="1700" style={{color: "#FFCC00"}}>GOLD</span>
        </span>
      </TitleText>
      <div data-aos="fade-right" data-aos-delay="3000">
        <BuyButton onClick={()=>setDialog(true)}>{"Transfer/Buy"}</BuyButton>
        <WrapNumbers>

        <div style={{color: "white", marginBottom: "30px"}}>
          <span style={{fontSize: size}}>$</span>
          <AnimatedNumber
              value={num}
              hasComma={true}
              size={size}
              duration={300}
          />
          <span style={{fontSize: size, marginLeft: "25px", color:"#FFCC00"}}>|</span>
          <span style={{fontSize: size, marginLeft: "35px", color:"#FFCC00"}}>{percent}%</span>
        </div>
          <ProgressBar 
              score={percent} 
              hideText={true}
              progressWidth={processWidth} 
              primaryColor={"#FFCC00"} 
              secondaryColor={"#FFCC00"}
              />
          </WrapNumbers>
      </div>
      <Carousel />
    </HeroContainer>
    {dialog && <MintDialog setDialog={setDialog}/>}
      </>
  );
};

export default HeroSection;
