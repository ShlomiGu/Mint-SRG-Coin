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
    zIndex: '1',
    overflow: 'hidden',
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
})

const TitleUnderLine = styled('div')({
    border: '4px solid',
    color: '#FFCC00',
    backgroundColor: '#FFCC00',
    width: '50px',
    alignSelf: 'center',
    marginTop: '15px'
})

const BoxContainer = styled('div')({
    width: '45%',
    ['@media (max-width:780px)']: {
        width: '90%',
    },
})

const OpportunitySection = () => {
  return (
    <OpportuniryContainer style={{ backgroundImage: 'url("assets/DesktopSkyBackground.png")' }}>
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
            />
            )})}
        </BoxContainer>
    </OpportuniryContainer>
  )
}

export default OpportunitySection