import React from 'react';
import styled from "styled-components";
import items from '../../Data/AboutUsData'


const AboutUsContainer = styled.div`
    width: 100vw;
    min-height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    overflow: hidden;
    background-image: url("assets/DesktopSkyBackground.png");
`

const WrapText = styled.div`
    width: 65%;
    min-width: 50vw;
    z-index: 0;
    @media screen and (max-width:780px) {
        padding: 0 0;
        width: 93%;
        margin-top: 0;
    }
`

const TitleText = styled.h1`
    color: var(--unnamed-color-f1f1f1);
    text-align: center;
    display: flex;
    flex-direction: column;
    font: normal normal bold 65px/88px Poppins;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1,
    margin-top: 0;

    @media screen and (max-width: 425px) {
        font: normal normal bold 38px/45px Poppins;
        margin: 0.67em 0 0.67em 0;
    };
`

const TitleUnderLine = styled.div`
    border: 4px solid;
    color: #FFCC00;
    background-color: #FFCC00;
    width: 50px;
    align-self: center;
    margin-top: 15px;
`

const Content1 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    text-align: center;
    font: normal normal normal 32px/43px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin-bottom: 4vw;

    @media screen and (max-width:1440px) {
        font: normal normal normal 26px/29px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal normal 18px/29px Poppins;
    }
`;

const Title2 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    text-align: center;
    font: normal normal 600 43px/61px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin-bottom: 8px;

    @media screen and (max-width:1440px) {
        font: normal normal 600 34px/61px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal 600 28px/61px Poppins;
        margin-bottom: 0;
    }
`;

const Content2 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    text-align: center;
    font: normal normal normal 26px/36px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    width: 85%;
    margin: auto;
    @media screen and (max-width:1440px) {
        font: normal normal normal 24px/36px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal normal 16px/29px Poppins;
    }
`;

const AboutUsSection = () => {
    return (
        <>
            <AboutUsContainer>
                <TitleText>
                    About Us
                    <TitleUnderLine />
                </TitleText>
                <WrapText>
                    <Content1>
                        { items.content }
                    </Content1>
                    <Title2>
                        { items.Title2 }
                    </Title2>
                    <Content2>
                        { items.content2 }
                    </Content2>
                </WrapText>
            </AboutUsContainer>
        </>
    );
}

export default AboutUsSection;
