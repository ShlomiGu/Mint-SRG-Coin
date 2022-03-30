import React from "react";
import { styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavButtonContainer = styled("div")((props) => ({
  width: "62px",
  height: "62px",
  display: "flex",
  border: "1px solid",
  borderRadius: "50%",
  borderColor: props.ishovered ? "#FFCC00" : "#4a4b4b",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginTop: '10px'
}));

const ArrowImage = styled(FontAwesomeIcon)((props) => ({
  color: props.ishovered ? "white" : "#FFCC00",
  fontSize: "1.5rem",
}));

const CarouselNavButton = ({ icon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <NavButtonContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ishovered={isHovered}
        onClick={onClick}
      >
        <ArrowImage icon={icon} ishovered={isHovered} />
      </NavButtonContainer>
    </>
  );
};

export default CarouselNavButton;
