import React, { useEffect } from 'react'
import styled from "styled-components"
import Aos from "aos";
import '../../../node_modules/aos/dist/aos.css';

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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{marginBottom: '1em'}}>
      <WrapText data-aos="fade-right">
        <NumberText>{number}</NumberText>
        <Description>{desc}</Description>
      </WrapText>
    </div>
  )
}

export default RowComp