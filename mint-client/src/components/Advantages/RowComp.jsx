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
  font: bold normal 600 44px/62px Poppins;
  margin: 0;
  margin-right: 10px;

  @media screen and (max-width: 1441px) {
    font: bold normal normal 24px/40px Poppins;;
  }

  @media screen and (max-width: 768px) {
    font: bold normal normal 20px/40px Poppins;;
  }
`;

const Description = styled.p`
  font-family: 'Poppins';
  color: var(--unnamed-color-f1f1f1);
  font: normal normal normal 30px/1.3 Poppins;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  margin: 0;

  @media screen and (max-width: 2048px) {
    font: normal normal normal 25px/1.3 Poppins;;
  };

  @media screen and (max-width: 768px) {
    font: normal normal normal 14px/1.3 Poppins;
  };
`;

const RowComp = ({ number, desc }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{marginBottom: '1.5em'}}>
      <WrapText data-aos="fade-right">
        <NumberText>{number}</NumberText>
        <Description>{desc}</Description>
      </WrapText>
    </div>
  )
}

export default RowComp