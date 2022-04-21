import React from 'react'
import { styled } from '@mui/material'
import items from '../../Data/OpportunityData';
import BoxComp from './BoxComp';

const OpportuniryContainer = styled('div')({
    width: '100vw',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
    overflow: 'hidden',
    paddingBottom: '25vh',

    ['@media (max-width:768px)']: {
        paddingBottom: '7vh',
    },
});

const Screen = styled('div')({
    width: '90%',
    ['@media (max-width:780px)']: {
        width: '100%',
    }
})

const TitleText = styled('h1')({
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    marginTop: "17vh",
    marginBottom: "5vh",
    color: "#F1F1F1",

    ['@media (max-width:768px)']: {
        font: 'normal normal bold 26px/45px Poppins',
        marginLeft: '5%',
        marginTop: "7vh",
    },
})

const TitleUnderLine = styled('div')({
    border: '4px solid',
    color: '#FFCC00',
    backgroundColor: '#FFCC00',
    width: '50px',
    marginTop: '15px'
})

const BoxContainer = styled('div')({
    width: '85%',
    margin: 'auto',
    ['@media (max-width:780px)']: {
        width: '90%',
    },
})

const CubeImg = styled('img')({
    position: 'absolute',
    left: '80vw',
    top: '250vh',
    ['@media (max-width:780px)']: {
        left: '60vw',
        top: '310vh',
    },
})

const LinesBg = styled('img')({
    position: 'absolute',
    overflow: 'hidden',
    width: 'inherit',
    paddingTop: '5vh',
    
    // zIndex: 0,
    
    ['@media (max-width:769px)']: {
        paddingTop: '15vh',
    },
})

const OpportunitySection = () => {
    const checkIfIsLeft = (num) => {
        return num % 2 === 1
    }

  return (
    <OpportuniryContainer style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")' }}>
        <LinesBg src={'/assets/OpportunityLinesBg.svg'} alt='Lines' />
        <CubeImg className="Cube-2" src={"/assets/Cube2.png"} alt="cube2" />
        <Screen>
            <TitleText>
                The Opportunity
                <TitleUnderLine />
            </TitleText>
            <BoxContainer>
                {items.map((info, index) => {          
                    return(
                        <BoxComp
                        id={index}
                        number={info.number}
                        title={info.title}
                        content={info.content}
                        isLeft={checkIfIsLeft(index)}
                        />
                        )})}
            </BoxContainer>
        </Screen>
    </OpportuniryContainer>
  )
}

export default OpportunitySection