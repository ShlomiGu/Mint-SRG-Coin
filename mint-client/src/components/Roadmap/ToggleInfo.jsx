import { Collapse, Fade, Grid, styled, Typography } from "@mui/material";
import { zIndex } from "material-ui/styles";
import React from "react";

const ToggleContainer = styled('div')((props) => ({
  borderRadius: '15px',
  cursor: 'pointer',
  boxShadow: props.isOpen ? "0 1px 10px 1px #FFCC00" : 0,
  transition: "box-shadow 1s ease",
  marginTop: '-30px',
  zIndex: 1,
}))

const StyledBox = styled("div")((props) => ({
  width: "30vw",
  height: "100px",
  borderRadius: props.isOpen ? "15px 15px 0 0" : "15px",
  backgroundColor: "#19181B",
  color: "#F1F1F1",
  display: "flex",
  marginBottom: props.isOpen ? "-15px" : 0,
  ['@media (max-width:768px)']: {
    width: "40vw",
  },
}));

const TextBox = styled(Grid)({
  width: "-webkit-fill-available",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const TitleBox = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginLeft: "30px",

  ["@media (max-width:768px)"]: {
    fontSize: "0.75rem",
    marginLeft: "20px",
  },
});

const SubTitleBox = styled("div")({
  fontSize: "0.5rem",
  marginLeft: "30px",

  ["@media (max-width:768px)"]: {
    marginLeft: "20px",
  },
});

const OpenButtonBox = styled("div")({
  width: "40px",
  marginLeft: "10px",
  marginRight: '20px',
  display: "flex",
  alignContent: "center",
  cursor: "pointer",
});

const OpenButton = styled("img")({
  position: "absolute",
  alignSelf: "center",
});

const ContentBox = styled(Grid)({
  // minHeight: "200px",
  width: "30vw",
  backgroundColor: "#1F1E21",
  borderRadius: "0 0 15px 15px",
  ['@media (max-width:768px)']: {
    width: "40vw",
  },
});

const ContentText = styled(Typography)({
  color: "#F1F1F1",
  marginLeft: "30px",
  padding: "30px 0",
  fontSize: "1.2rem",
  whiteSpace: 'break-spaces',

  ["@media (max-width:768px)"]: {
    fontSize: "0.6rem",
    marginLeft: "20px",
  },
});

const ToggleInfo = ({ title, subTitle, content, id, openKey, setOpenKey }) => {
  const isOpen = openKey === id;

  const handleToggleButtonClicked = () => {
    isOpen ? setOpenKey(-1) : setOpenKey(id);
  };

  return (
      <ToggleContainer isOpen={isOpen} onClick={handleToggleButtonClicked}>
        <StyledBox isOpen={isOpen}>
          <TextBox>
            <TitleBox>{title}</TitleBox>
            <SubTitleBox>{subTitle}</SubTitleBox>
          </TextBox>
          <OpenButtonBox>
            <Fade in={!isOpen}>
              <OpenButton src={"/assets/YellowPlus.svg"} />
            </Fade>
            <OpenButton src={"/assets/YellowMinus.svg"} />
          </OpenButtonBox>
        </StyledBox>

        <Collapse in={isOpen}>
          <ContentBox>
            <ContentText>{content}</ContentText>
          </ContentBox>
        </Collapse>
      </ToggleContainer>
  );
};

export default ToggleInfo;
