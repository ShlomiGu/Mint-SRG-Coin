import React from "react";
import { Grid, styled } from "@mui/material";
import Roadmap from "./Roadmap";

const Screen = styled("div")({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: "url(assets/DesktopSkyBackground.png)",
  backgroundRepeat: 'revert',
  
});

const Title = styled("div")({
  fontSize: "3rem",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "17vh",
  color: "#F1F1F1",
});

const TitleUnderLine = styled("div")({
  border: "4px solid",
  color: "#FFCC00",
  width: "50px",
  alignSelf: "center",
  marginTop: "15px",
});

const ContentContainer = styled(Grid)({
  minHeight: "52vh",
});

const RoadmapContainer = () => {
  return (
    <Screen>
      <Title>
        The Roadmap
        <TitleUnderLine />
      </Title>
      <ContentContainer>
        <Roadmap/>
      </ContentContainer>
    </Screen>
  );
};

export default RoadmapContainer;
