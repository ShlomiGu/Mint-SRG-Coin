import React from "react";
import { styled } from "@mui/material";
import ToggleInfo from "./ToggleInfo";

const Screen = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const Title = styled("div")({
  fontSize: '3rem',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  marginTop: '20vh',
  marginBottom: '5vh',
  color: '#F1F1F1'
});

const TitleUnderLine = styled('div')({
  border: '4px solid',
  color: '#FFCC00',
  width: '50px',
  alignSelf: 'center',
  marginTop: '15px'
})

const FAQ = () => {
  return (
    <Screen style={{ backgroundImage: "assets/DesktopSkyBackground.png" }}>
      <Title>
        FAQ
        <TitleUnderLine/>
      </Title>

      <ToggleInfo width={'20vw'}/>
      <ToggleInfo width={'20vw'}/>
      <ToggleInfo width={'20vw'}/>
    </Screen>
  );
};

export default FAQ;
