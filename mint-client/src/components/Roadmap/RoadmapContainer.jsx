import React from "react";
import { Grid, styled } from "@mui/material";
import Roadmap from "./Roadmap";

const Screen = styled("div")({
  position: 'relative',
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: "url(assets/DesktopSkyBackground.png)",
  backgroundRepeat: "revert",
});

const Title = styled("div")({
  fontSize: "3rem",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  color: "#F1F1F1",
  zIndex: 10,

  ['@media (max-width:768px)']: {
    font: 'normal normal bold 2.2rem/45px Poppins',
    marginTop: '50px',
},
});

const TitleUnderLine = styled("div")({
  border: "4px solid",
  color: "#FFCC00",
  width: "50px",
  alignSelf: "center",
  marginTop: "15px",
  zIndex: 10,
});

const ContentContainer = styled(Grid)({
  minHeight: "52vh",
});

const CubeImg1 = styled('img')({
  position: 'absolute',
  left: 0,
  top: '20vh',
  ['@media (max-width:768px)']: {
    display: 'none'
  },
})

const CubeImg2 = styled('img')({
  position: 'absolute',
  left: '15%',
  top: '50%',
  ['@media (max-width:768px)']: {
    left: '5vw',
    height: '13vmin',
    top: '64vh',
  },
})

const FinishContainer = styled("div")({
  height: '200px',

  ["@media (max-width:768px)"]: {
    height: '30px',
  },
})

const RoadmapContainer = () => {
  return (
    <Screen>
      <CubeImg1 className="Cube-1" src={"/assets/Cube1.png"} alt="cube1" />
      <CubeImg2 className="Cube-2" src={"/assets/Cube2.png"} alt="cube2" />

      <Title>
        The Roadmap
        <TitleUnderLine />
      </Title>
      <ContentContainer>
        <Roadmap />
      </ContentContainer>
      <FinishContainer />
    </Screen>
  );
};

export default RoadmapContainer;
