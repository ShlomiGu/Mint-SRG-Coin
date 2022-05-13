import React from 'react';
import { styled } from "@mui/material"
import styledComponent from "styled-components";
import items from '../../Data/AdvantagesData'
import RowComp from './RowComp';

const AdvantagesContainer = styled('div')({
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    zIndex: 1,
    overflow: 'hidden',
});

export const AdvantagesTable = styledComponent.div`
    // width: 80%;
    // max-width: 1200px;
    margin: auto;
    position: relative;
    
    background-color: transparent !important;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2 col2' 'col1 col1';
    }
    place-items: center;
    z-index: 1;
`;

export const Column1 = styledComponent.div`
    background-color: transparent !important;
    padding: 0 20px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        padding: 0 0;
    }
    z-index: 1;
`;

export const Column2 = styledComponent.div`
    background-color: transparent !important;
    grid-area: col2;
    z-index: 2;
    margin-left: 10vw;

    @media screen and (max-width: 768px) {
        padding: 0 0;
        margin: 0;
        margin-top: 2vh;
    }
`;

const WrapText = styled('div')({
    // marginTop: '10vh',
    marginLeft: '7vw',
    minWidth: '50vw',
    ['@media (max-width:780px)']: {
        padding: '0 0',
        marginTop: '0',
    }
})

const TitleText = styled('h1')({
    color: 'var(--unnamed-color-f1f1f1)',
    textAlign: 'left',
    font: 'normal normal bold 55px/88px Poppins',
    // fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    letterSpacing: '0px',
    color: '#F1F1F1',
    opacity: '1',
    marginTop: '0',
    marginBottom: '50px',
    fontSize: "3rem",

    ['@media (max-width: 425px)']: {
        fontSize: '1.7em',
        marginBottom: '25px',
    }
})

const TitleUnderLine = styled('div')({
    border: '4px solid',
    color: '#FFCC00',
    backgroundColor: '#FFCC00',
    width: '50px',
    alignSelf: 'center',
    // marginTop: '15px'
})

const WrapImg = styled('div')({
    
})

const LogoImg = styled('img')({
    position: 'absolute',
    height: '100vmin',
    marginLeft: '3%',
    ['@media (max-width:780px)']: {
        height: '60vmin',
        margin: '0',
    },
})

const LinesImg = styled('img')({
    height: '100vmin',
    ['@media (max-width:780px)']: {
        height: '60vmin',
    },
    ['@media (min-width:1024px)']: {
        marginLeft: '3vw',
    }
})

const AdvantagesSection = () => {
    return (
        <>
            <AdvantagesContainer id="Advantages" style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")' }}>
                <AdvantagesTable>
                    <Column1>
                        <WrapText>
                            <TitleText>
                                {items.title}
                                <TitleUnderLine/>
                            </TitleText>   
                            <RowComp number="01" desc={items.item1} />
                            <RowComp number="02" desc={items.item2} />            
                            <RowComp number="03" desc={items.item3} />            
                            <RowComp number="04" desc={items.item4} />            
                            <RowComp number="05" desc={items.item5} />            
                            <RowComp number="06" desc={items.item6} />            
                        </WrapText>
                    </Column1>
                    <Column2>
                        <WrapImg>
                                <LogoImg className='App-logo' src="assets/BigLogo.svg" alt='logo' />
                                <LinesImg className='Lines-logo' src="assets/DottedTwoLine.svg" alt="lines" />
                        </WrapImg>
                    </Column2>
                </AdvantagesTable>
            </AdvantagesContainer>
        </>
    );
}

export default AdvantagesSection;
