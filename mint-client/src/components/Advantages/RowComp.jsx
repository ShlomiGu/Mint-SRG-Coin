import React from 'react'
import styled from "styled-components"

const WrapText = styled.div`
  display: inline-flex;
  align-items: center;
`;

const NumberText = styled.h1`
  color: #ffcc00;
  font-size: 62px Poppins;
  margin: 0;
  margin-right: 10px;
`;

const Description = styled.p`
  font-family: 'Poppins';
  color: var(--unnamed-color-f1f1f1);
  text-align: left;
  font-size: 40px Poppins;;
  letter-spacing: 0px;
  /* color: #F1F1F1; */
  opacity: 1;
  margin: 0;
`;

const RowComp = ({ number, desc }) => {
  return (
    <div>
      <WrapText>
        <NumberText>{number}</NumberText>
        <Description>{desc}</Description>
      </WrapText>
    </div>
  )
}

export default RowComp