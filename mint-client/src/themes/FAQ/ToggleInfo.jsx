import { Collapse, Fade, Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";

const StyledBox = styled("div")((props) => ({
  width: "50vw",
  height: "100px",
  borderRadius: props.isOpen ? "15px 15px 0 0" : "15px",
  backgroundColor: "#19181B",
  color: "#F1F1F1",
  display: "flex",
  transition: "border-radius 1s ease",
  marginBottom: !props.isOpen ? '1vh' : 0
}));

const TextBox = styled(Grid)({
  width: "95%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const TitleBox = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginLeft: "15px",
});

const SubTitleBox = styled("div")({
  fontsize: "0.75rem",
  marginLeft: "15px",
});

const OpenButtonBox = styled("div")({
  display: "flex",
  alignContent: "center",
  cursor: 'pointer'
});

const OpenButton = styled("img")({
  position: "absolute",
  alignSelf: "center",
});

const ContentBox = styled(Grid)({
  height: "200px",
  width: "50vw",
  backgroundColor: "#1F1E21",
  borderRadius: "0 0 15px 15px",
  marginBottom: '1vh'
});

const ContentText = styled(Typography)({
  color: '#F1F1F1',
  marginLeft: '15px'
})

const ToggleInfo = () => {
  const [isOpen, setIsOpened] = useState(false);

  const handleToggleButtonClicked = () => {
    setIsOpened(!isOpen);
  };

  return (
    <>
      <StyledBox isOpen={isOpen}>
        <TextBox>
          <TitleBox>{"How many Aliens will be available?"}</TitleBox>
          <SubTitleBox></SubTitleBox>
        </TextBox>
        <OpenButtonBox onClick={handleToggleButtonClicked}>
          <Fade in={!isOpen}>
            <OpenButton src={"/assets/YellowPlus.svg"} />
          </Fade>
          <OpenButton src={"/assets/YellowMinus.svg"} />
        </OpenButtonBox>
      </StyledBox>

      <Collapse easing in={isOpen}>
        <ContentBox>
          <ContentText>
            mashdfsdhfdsogsadg sdag displaygsadgsadgsadgdsag
          </ContentText>
        </ContentBox>
      </Collapse>
    </>
  );
};

export default ToggleInfo;
