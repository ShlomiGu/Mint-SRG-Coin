import React from 'react'
import styled from 'styled-components'
import PartnersImages from '../../Data/Partnerships';

const PartnershipsContainer = styled.div`
    background-color: #000 !important;
    background-image: url("assets/DesktopSkyBackground.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    z-index: 1;
    overflow: hidden;
`;

const SponsorsPeopleDiv = styled.div`
  background-color: transparent !important;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  justify-content: center;
`;

const SponsorsPerson = styled.img`
  background-color: transparent !important;
  width: 10em;
  border-radius: 0.5em;
  margin: 1vw 1vw 0 1vw;
  &:hover {
    box-shadow: 0 0 50px 2.5px #fff;
  }
`;

const TitleText = styled('h1')({
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: "#F1F1F1",
    zIndex: 2,

    ['@media (max-width:768px)']: {
        font: 'normal normal bold 26px/45px Poppins',
        margin: '0.67em 0 0.67em 0',
    },
})

const TitleUnderLine = styled('div')({
    border: '4px solid',
    color: '#FFCC00',
    backgroundColor: '#FFCC00',
    width: '50px',
    alignSelf: 'center',
    marginTop: '15px'
})

const PartnershipsSection = () => {
  return (
    <PartnershipsContainer>
        <TitleText>
            Partnerships
            <TitleUnderLine />
        </TitleText>
        <SponsorsPeopleDiv>
            {PartnersImages.map((info, index) => {          
                return(
                    <SponsorsPerson
                        src={info.image}
                        alt='ss'
                    />
                    )})}
        </SponsorsPeopleDiv>
    </PartnershipsContainer>
  )
}

export default PartnershipsSection