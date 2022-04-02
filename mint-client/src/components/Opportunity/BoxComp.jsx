import React from 'react'
import { styled } from "@mui/material"
import styledComponent from "styled-components";

const Screen = styledComponent.div`
    width: 80%;
    align-items: right;
    margin-left: ${({isLeft}) => (isLeft ? '' : 'auto')};
    margin-bottom: 2em;
    @media screen and (max-width: 768px) {
        width: 100%;
    };
`

const GoldNumber = styled('h1')({
    color: 'var(--unnamed-color-ffcc00)',
    font: 'normal normal 600 44px/62px Poppins',
    letterSpacing: '0px',
    color: '#FFCC00',
    opacity: 1,
    margin: 0,

    ['@media (max-width:780px)']: {
        font: 'normal normal 600 24px/62px Poppins',
    },
})

const TextBox = styled('div')({
    background: 'var(--unnamed-color-060707) 0% 0% no-repeat padding-box',
    border: '2px solid var(--unnamed-color-f1f1f1)',
    background: '#060707 0% 0% no-repeat padding-box',
    border: '2px solid #F1F1F1',
    borderRadius: '15px',
    opacity: 0.6,
    ['&:hover']: {
        opacity: 1,
        boxShadow: '2px 2px 15px #FFCC00',
    },
})

const WrapText = styled('div')({
    padding: '30px',
    ['@media (max-width:780px)']: {
        padding: '20px',
    },
})

const TitleText = styled('div')({
    color: 'var(--unnamed-color-f1f1f1)',
    textAlign: 'left',
    font: 'normal normal 600 28px/61px Poppins',
    letterSpacing: '0px',
    textTransform: 'capitalize',
    opacity: 1,
    margin: '0',
    ['@media (max-width:780px)']: {
        font: 'normal normal 600 20px/61px Poppins',
    },
})

const ContentText = styled('p')({
    color: 'var(--unnamed-color-f1f1f1)',
    textAlign: 'left',
    font: 'normal normal normal 20px/36px Poppins',
    letterSpacing: '0px',
    color: '#F1F1F1',
    opacity: 1,
    margin: '0',
    ['@media (max-width:780px)']: {
        font: 'normal normal normal 16px/29px Poppins',
    },
})

const BoxComp = ({ number, title, content, isLeft }) => {
  return (
    <Screen isLeft={isLeft}>
        <GoldNumber>
            { number }
        </GoldNumber>
        <TextBox>
            <WrapText>
                <TitleText>
                    { title }
                </TitleText>
                <ContentText>
                    { content }
                </ContentText>
            </WrapText>
        </TextBox>
    </Screen>
  )
}

export default BoxComp