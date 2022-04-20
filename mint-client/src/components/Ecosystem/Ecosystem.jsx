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
    zIndex: 3,
    backgroundImage: 'url(assets/DesktopSkyBackground.png)'
});
const TitleText = styled('h1')({
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "12vh",
    marginTop: "-15vh",
    color: "#F1F1F1",
    zIndex: 2,

    ['@media (max-width:768px)']: {
        margin: '0.67em 0 0.67em 0',
    },
    ['@media (max-width:425px)']: {
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
    width: "36%",
    marginBottom: "5vh",
    zIndex: 2,

    ['@media (min-width:769px)']: {
        margin: '10vh 0 45vh 0'
    },
    ['@media (max-width:768px)']: {
        width: "65%",
    },
})

const BoxSmallContainer = styled('div')({
    width: '90%',
    margin: 'auto',
    
    ['@media (min-width:769px)']: {
        display: 'none',
    },
})

const LinesBg = styled('img')({
    position: 'absolute',
    zIndex: 1,
    overflow: 'hidden',
    width: 'inherit',

    
    ['@media (max-width:769px)']: {
        paddingTop: '10vh',
    },
})


const EcosystemSection = () => {
    return (
        <>
            <EcosystemContainer>
                <LinesBg src={'/assets/EcosystemLinesBg.svg'} alt='Lines' />
                <TitleText>
                    The SRG Ecosystem
                    <TitleUnderLine />
                </TitleText>
                <EcosystemImage src={'/assets/SRGPentagon.png'} alt='img'/>
                <BoxSmallContainer>
                    {items.map((info, index) => {          
                        return(
                            <BoxEcosystem
                            id={index}
                            title={info.title}
                            content={info.content}
                            isMobile={true}
                            />
                            )})}
                </BoxSmallContainer>
                    {/* NFT Marketplace */}
                    <BoxEcosystem title={items[0].title} width='100%' margin_top='42%' margin_left='41%' isMobile={false}/>

                    {/* Crypto Token */}
                    <BoxEcosystem title={items[1].title} width='70%' margin_top='12%' margin_left='63%' isMobile={false}/>
                    
                    {/* Unique Reserve */}
                    <BoxEcosystem title={items[2].title} width='70%' margin_top='-1%' isMobile={false}/>

                    {/* NFT Series For Talents */}
                    <BoxEcosystem title={items[3].title} width='100%' margin_top='13%' margin_right='55%' isMobile={false}/>

                    {/* Theorey Rules */}
                    <BoxEcosystem title={items[4].title} content={items[4].content} width='80%' margin_top='44%' margin_right='40%' isMobile={false}/>
            </EcosystemContainer>
        </>
    );
}

export default EcosystemSection;