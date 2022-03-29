import React from 'react';
import { styled } from "@mui/material"
import styledComponent from "styled-components";
import BoxEcosystem from './BoxEcosystem';
import items from '../../Data/Ecosystem'

const EcosystemContainer = styled('div')({
    width: '100vw',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: '1',
    overflow: 'hidden',
    backgroundImage: 'url(assets/DesktopSkyBackground.png)'
});
const TitleText = styled('h1')({
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "17vh",
    marginBottom: "5vh",
    color: "#F1F1F1",

    ['@media (max-width:780px)']: {
        font: 'normal normal bold 26px/45px Poppins',
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

const EcosystemImage = styled('img')({
    alignSelf: "center",
    width: "55%",
    marginBottom: "5vh"
})

const BoxContainer = styled('div')({
    width: "90%",
    margin: "auto",
})

const EcosystemSection = () => {
    return (
        <>
            <EcosystemContainer>
                <TitleText>
                    The SRG Ecosystem
                    <TitleUnderLine />
                </TitleText>
                <EcosystemImage src={'/assets/SRGPentagon.png'} alt='img'/>
                <BoxContainer>
                    {items.map((info, index) => {          
                        return(
                            <BoxEcosystem
                            id={index}
                            title={info.title}
                            content={info.content}
                            />
                            )})}
                </BoxContainer>
            </EcosystemContainer>
        </>
    );
}

export default EcosystemSection;