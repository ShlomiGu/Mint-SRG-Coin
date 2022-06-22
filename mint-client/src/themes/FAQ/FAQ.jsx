import React, { useState } from "react";
import { Grid, styled, Typography } from "@mui/material";
import ToggleInfo from "./ToggleInfo";
import data from "./data.json";

const Screen = styled("div")({
  width: "100vw",
  // minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: "url(assets/DesktopSkyBackground.png)",

  ['@media (max-width:425px)']: {
      paddingTop: '50px',
  }

});

const Title = styled("div")({
  fontSize: "3rem",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "6vw",
  marginBottom: "5vh",
  color: "#F1F1F1",

  ['@media (max-width:768px)']: {
    font: 'normal normal bold 1.7rem/45px Poppins',
    // margin: '0.67em 0 0.67em 0',
},
});

const TitleUnderLine = styled("div")({
  border: "4px solid",
  color: "#FFCC00",
  width: "50px",
  alignSelf: "center",
  marginTop: "15px",
  backgroundColor: "#FFCC00",
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
  minHeight: "50vh",
});

const FAQ = () => {
  const [openKey, setOpenKey] = useState(-1)

  return (
    <Screen id="FAQ">
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

      <div className="wrap-bottom">
                      <div className="wrap-icons-mobile">
                        <div style={{marginBottom: "20px"}}>
                          <a href="https://www.instagram.com/illumishare_srg/"><i className="fa fa-instagram icon" aria-hidden="true"></i></a>
                          <a href="https://discord.com/invite/y44GfgfhHf"><i className="fa-brands fa-discord icon" aria-hidden="true" ></i></a>
                          <a href="https://www.linkedin.com/company/illumishare-srg/"><i className="fa fa-linkedin icon" aria-hidden="true"></i></a>
                          <a href="https://twitter.com/IllumishareSRG"><i class="fa fa-twitter last-icon" aria-hidden="true"></i></a>
                        </div>
                          <a href="https://linktr.ee/illumisharesrg" className="more-icon">More...</a>
                      </div>
                      
                      <SeperationLine />
                      <div className="under-line">
                        <RightsReservedText>{"© All Rights Reserved."}</RightsReservedText>
                        <div className="wrap-icons-comp">
                          <a href="https://www.instagram.com/illumishare_srg/"><i class="fa fa-instagram fa-2x icon" aria-hidden="true"></i></a>
                          <a href="https://discord.com/invite/y44GfgfhHf"><i class="fa-brands fa-discord icon" aria-hidden="true" /></a>
                          <a href="https://www.linkedin.com/company/illumishare-srg/"><i class="fa fa-linkedin icon" aria-hidden="true"></i></a>
                          <a href="https://twitter.com/IllumishareSRG"><i class="fa fa-twitter icon" aria-hidden="true"></i></a>
                          <a href="https://linktr.ee/illumisharesrg" className="more-icon">More...</a>
                        </div>
                      </div>
                    </div>
    </Screen>
  );
};

export default FAQ;
