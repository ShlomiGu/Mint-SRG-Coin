import React from 'react'
import ApexChart from './chart'
import styled from 'styled-components';
import Chart3D from './chart3D';

const Screen = styled.div`

    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(assets/DesktopSkyBackground.png);
    background-repeat: revert;
    color: #D6D6D6;
    padding-bottom: 25vh;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      padding-bottom: 0;
    } 
`

const Title = styled("div")({
  fontSize: "3rem",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  color: "#F1F1F1",
  zIndex: 10,
  paddingTop: '20vh',
  marginBottom: '12vh',

  ['@media (max-width:768px)']: {
    font: 'normal normal bold 1.7rem/45px Poppins',
    paddingTop: '10vh',
  },
});

const TitleUnderLine = styled("div")({
  border: "4px solid",
  color: "#FFCC00",
  width: "50px",
  alignSelf: "center",
  marginTop: "15px",
  zIndex: 10,
});


const ChartPieSection = () => {
  return (
    <Screen>
      <Title>
        SRG Token Allocation
        <TitleUnderLine />
      </Title>
        <ApexChart />
        {/* <Chart3D /> */}
    </Screen>
  )
}

export default ChartPieSection