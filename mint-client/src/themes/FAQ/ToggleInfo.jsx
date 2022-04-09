import { Collapse, Fade, Grid, styled, Typography } from "@mui/material";
import React from "react";

const StyledBox = styled("div")((props) => ({
  width: "50vw",
  height: "100px",
  borderRadius: props.isOpen ? "15px 15px 0 0" : "15px",
  backgroundColor: "#19181B",
  color: "#F1F1F1",
  display: "flex",
  transition: "border-radius 1s ease",
  marginBottom: !props.isOpen ? '1vh' : 0,

  ['@media (max-width:768px)']: {
    width: "90vw",
  },
}));

const TextBox = styled(Grid)({
  width: "95%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  ['@media (max-width:768px)']: {
    width: "90%",
  },
});

const TitleBox = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginLeft: "30px",

  ['@media (max-width:768px)']: {
    fontSize: "1.3rem",
  },
});

const SubTitleBox = styled("div")({
  fontsize: "0.75rem",
  marginLeft: "30px",
});

const OpenButtonBox = styled("div")({
  display: "flex",
  alignContent: "center",
  cursor: 'pointer'
});

const OpenButton = styled("img")({
  position: "absolute",
  alignSelf: "center",
  ['@media (max-width:768px)']: {
    width: '20px'
  }
});

const ContentBox = styled(Grid)({
  minHeight: "200px",
  width: "50vw",
  backgroundColor: "#1F1E21",
  borderRadius: "0 0 15px 15px",
  marginBottom: '1vh',

  ['@media (max-width:768px)']: {
    width: "90vw",
  },
});

const ContentText = styled(Typography)({
  color: '#F1F1F1',
  marginLeft: '30px',
  paddingTop: '30px',
  fontSize: '1.2rem',

  ['@media (max-width:768px)']: {
    fontSize: '1rem',
  },
})

const ToggleInfo = ({ title, subTitle, content, id, openKey, setOpenKey }) => {
  const isOpen = openKey === id

  const handleToggleButtonClicked = () => {
    isOpen ? setOpenKey(-1) : setOpenKey(id)
  };

  return (
    <>
      <StyledBox isOpen={isOpen}>
        <TextBox>
          <TitleBox>{title}</TitleBox>
          <SubTitleBox>{subTitle}</SubTitleBox>
        </TextBox>
        <OpenButtonBox onClick={handleToggleButtonClicked}>
          <Fade in={!isOpen}>
            <OpenButton src={"/assets/YellowPlus.svg"} />
          </Fade>
          <OpenButton src={"/assets/YellowMinus.svg"} />
        </OpenButtonBox>
      </StyledBox>

      <Collapse in={isOpen}>
        <ContentBox>
          <ContentText>
            {content}
          </ContentText>
        </ContentBox>
      </Collapse>
    </>
  );
};

export default ToggleInfo;
