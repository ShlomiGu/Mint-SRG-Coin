import React from 'react';
import { styled } from "@mui/material"
import items from '../../Data/AdvantagesData'
import RowComp from './RowComp';

const AdvantagesContainer = styled('div')({
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    zIndex: '1',
    overflow: 'hidden',
});

const WrapText = styled('div')({
    marginTop: '10vh',
    marginLeft: '7vw',
    minWidth: '50vw'
})

const TitleText = styled('h1')({
    color: 'var(--unnamed-color-f1f1f1)',
    textAlign: 'left',
    font: 'normal normal bold 55px/88px Poppins',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    letterSpacing: '0px',
    color: '#F1F1F1',
    opacity: '1',
})

const TitleUnderLine = styled('div')({
    border: '4px solid',
    color: '#FFCC00',
    width: '50px',
    alignSelf: 'center',
    marginTop: '15px'
})

const WrapImg = styled('div')({
    alignItems: 'rigth',
    // marginTop: '25vh',
    marginLeft: '17vw',
    alignItems: 'center'
})

const LogoImg = styled('img')({
    position: 'absolute',
    height: '80%',
    marginTop: '10vh',
    marginLeft: '4vw',
})

const LinesImg = styled('img')({
    position: 'absolute',
    height: '100%',
})

const AdvantagesSection = () => {
    return (
        <>
            <AdvantagesContainer style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")' }}>
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
                <WrapImg>
                        <LogoImg className='App-logo' src="assets/logo.png" alt='logo' />
                    <LinesImg className='Lines-logo' src="assets/DottedTwoLine.svg" alt="lines" />
                </WrapImg>
            </AdvantagesContainer>
        </>
    );
}

export default AdvantagesSection;
