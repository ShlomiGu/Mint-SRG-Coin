import React from 'react'
import { styled } from "@mui/material";
import styledComp from "styled-components";
import { margin } from '@mui/material/node_modules/@mui/system';

const BoxBigContainer = styled('div')((props) => ({
    position: 'absolute',
    marginTop: props.margin_top,
    marginLeft: props.margin_left,
    marginBottom: props.margin_bottom,
    marginRight: props.margin_right,
    zIndex: 1,

    ['@media (max-width:768px)']: {
        position: 'unset',
        display: props.isMobile ? 'block' : 'none'
    },
}))

const Screen = styled('div')((props) => ({
    width: props.width,
    alignItems: 'right',
    margin: 'auto',
    font: 'normal normal 600 24px/40px Poppins',
    opacity: 0.9,
    transition: 'all 0.1s ease-in-out',

    ['@media (max-width:1410px)']: {
        font: 'normal normal 600 20px/40px Poppins',
    },
    ['@media (max-width:769px)']: {
        width: '95%',
        marginBottom: '15px',
        font: 'normal normal 600 18px/29px Poppins',
    },

    ['&:hover']: {
        cursor: 'pointer',
        opacity: 1,
        font: 'normal normal 600 27px/40px Poppins',
        ['@media (max-width:1410px)']: {
            font: 'normal normal 600 23px/40px Poppins',
        },
        ['@media (max-width:769px)']: {
            width: '100%',
            font: 'normal normal 600 20px/29px Poppins',
        },
    },
}))


const TextBox = styledComp.div`
    background: var(--unnamed-color-060707) 0% 0% no-repeat padding-box;
    border: 2px solid var(--unnamed-color-f1f1f1);
    background: #060707 0% 0% no-repeat padding-box;
    border: 2px solid #F1F1F1;
    border-radius: 15px;
    opacity: 1;
    &:hover {
        border: 2px solid #FFCC00;
        box-shadow: 2px 2px 15px #FFCC00;
    },
`;

const WrapText = styledComp.div`
    padding: 30px;
    text-align: center;
    @media screen and (max-width: 1441px) {
        padding: 20px;
    };
    @media screen and (max-width: 768px) {
        padding: 15px;
    };
`

const TitleText = styledComp.div`
    color: var(--unnamed-color-f1f1f1);
    letter-spacing: 0px;
    text-transform: capitalize;
    opacity: 1;
    margin: 0;
`;

const ContentText = styledComp.p`
    color: var(--unnamed-color-f1f1f1);
    font: normal normal normal 14px/36px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin: 0;
    @media screen and (max-width: 1441px) {
        font: normal normal normal 14px/27px Poppins;
    };
    @media screen and (max-width: 768px) {
        font: normal normal normal 13px/27px Poppins;
    };
`;

const BoxEcosystem = ({ title, content, width, margin_top, margin_left, margin_right, margin_bottom, isMobile }) => {
  return (
    <BoxBigContainer margin_top={margin_top} margin_left={margin_left} margin_right={margin_right} margin_bottom={margin_bottom} isMobile={isMobile}>
        <Screen width={width}>
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
    </BoxBigContainer>
  )
}

export default BoxEcosystem