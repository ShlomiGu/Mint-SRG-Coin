import React from "react";
import { styled, Grid, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";

const HeroContainer = styled("div")({
  width: "86vw",
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  zIndex: "1",
  overflow: "hidden",
  padding: "5vh 7vw",
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
});

const TitleText = styled(Typography)({
  color: "white",
  fontSize: "3.5rem",
  fontWeight: "bold",
  width: "1400px",
});

const GoldBarImgae = styled("img")({
  height: "4.5rem",
  marginLeft: "20px",
  verticalAlign: "middle",
});

const HeroSection = () => {
  return (
    <HeroContainer
      style={{ backgroundImage: 'url("assets/MainBackground.png")', backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}
    >
      <Grid item container xs={12}>
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
      <Grid item container justifyContent={'flex-end'}>
        <Carousel/>
      </Grid>
    </HeroContainer>
  );
};

export default HeroSection;
