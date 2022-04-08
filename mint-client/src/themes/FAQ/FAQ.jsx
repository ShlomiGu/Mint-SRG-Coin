import React, { useState } from "react";
import { Grid, styled, Typography } from "@mui/material";
import ToggleInfo from "./ToggleInfo";
import data from "./data.json";

const Screen = styled("div")({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: "url(assets/DesktopSkyBackground.png)",
});

const Title = styled("div")({
  fontSize: "3rem",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "11vw",
  marginBottom: "5vh",
  color: "#F1F1F1",
});

const TitleUnderLine = styled("div")({
  border: "4px solid",
  color: "#FFCC00",
  width: "50px",
  alignSelf: "center",
  marginTop: "15px",
});

const RightsResevedSection = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5vh',
});

const RightsReservedText = styled(Typography)({
  color: "#F1F1F1",
  alignSelf: 'center',
  justifySelf: 'center',
  height: '--webkit-fill-available'
});

const SeperationLine = styled("div")({
  width: "80vw",
  marginBottom: '30px',
  borderBottom: "1px solid #707070",
});

const ContentContainer = styled(Grid)({
  minHeight: "52vh",
});

const FAQ = () => {
  const [openKey, setOpenKey] = useState(-1)

  return (
    <Screen>
      <Title>
        FAQ
        <TitleUnderLine />
      </Title>
      <ContentContainer>
        {data.data.map((info, index) => {          
          return(
          <ToggleInfo
            id={index}
            openKey={openKey}
            title={info.title}
            subTitle={info.subTitle}
            content={info.content}
            width={"20vw"}
            setOpenKey={setOpenKey}
          />
        )})}
      </ContentContainer>

      <RightsResevedSection>
        <SeperationLine />
        <RightsReservedText>{"© All Rights Reserved."}</RightsReservedText>
      </RightsResevedSection>
    </Screen>
  );
};

export default FAQ;
