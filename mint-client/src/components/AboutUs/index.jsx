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
    /* overflow: hidden; */
    background-image: url("assets/DesktopSkyBackground.png");

    @media screen and (min-width: 769px) {
        padding-top: 200px;
    }
`

const AboutTable = styled.div`
    width: 90%;
    position: relative;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
    place-items: center;
    z-index: 1;
`

export const Column1 = styled.div`
    background-color: transparent !important;
    padding: 0 20px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        padding: 0 0;
    }
    z-index: 1;
`;

export const Column2 = styled.div`
    background-color: transparent !important;
    grid-area: col2;
    z-index: 0;
    /* margin-left: 10vw; */

    @media screen and (max-width: 768px) {
        /* margin-top: 40px; */
    }
`;

const WrapText = styled.div`
    width: 65%;
    min-width: 50vw;
    z-index: 0;
    @media screen and (max-width:768px) {
        padding: 0 0;
        width: 100%;
        margin-top: 0;
        place-items: center;
    }
`

const TitleText = styled.h1`
    color: var(--unnamed-color-f1f1f1);
    display: flex;
    flex-direction: column;
    font: normal normal bold 3rem/60px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1,
    margin-top: 0;
    margin-bottom: 2.5vh;

    @media screen and (max-width: 425px) {
        font: normal normal bold 1.7rem/45px Poppins;
        margin: 0.67em 0 0.67em 0;
        place-items: center;
    };
`

const TitleUnderLine = styled.div`
    border: 4px solid;
    color: #FFCC00;
    background-color: #FFCC00;
    width: 50px;
    margin-top: 15px;
`

const Content1 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    font: normal normal bold 28px/43px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin-bottom: 1vw;
    white-space: break-spaces;

    @media screen and (max-width:1440px) {
        font: normal normal bold 26px/29px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal bold 14px/24px Poppins;
        margin-bottom: 5vw;
        text-align: center;
    }
`;

const Content2 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    font: normal normal normal 20px/36px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin-bottom: 4vw;

    @media screen and (max-width:1440px) {
        font: normal normal normal 20px/36px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal normal 14px/24px Poppins;
        text-align: center;
    }
`;

const Title2 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    font: normal normal 600 36px/61px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin-bottom: 8px;

    @media screen and (max-width:1440px) {
        font: normal normal 600 30px/61px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal 600 22px/61px Poppins;
        margin-bottom: 0;
        text-align: center;
    }
`;

const Content3 = styled.div`
    color: var(--unnamed-color-f1f1f1);
    font: normal normal normal 20px/36px Poppins;
    letter-spacing: 0px;
    color: #F1F1F1;
    opacity: 1;
    margin: auto;
    @media screen and (max-width:1440px) {
        font: normal normal normal 18px/36px Poppins;
    }
    @media screen and (max-width:768px) {
        font: normal normal normal 14px/24px Poppins;
        text-align: center;
    }
`;

const CubeImg1 = styled('img')((props) => ({
    position: 'absolute',
    left: props.left,
    top: props.top,
    width: props.width,
    height: '134px',
    zIndex: 1,
    ['@media (max-width:768px)']: {
      left: props.MLeft,
      top: props.MTop,
      height: '16vmin',
    },
  }))
  
  const CubeImg2 = styled('img')((props) => ({
    position: 'absolute',
    left: props.left,
    top: props.top,
    width: '83px',
    height: '113px',
    ['@media (max-width:768px)']: {
        left: props.MLeft,
        top: props.MTop,
        height: '17vmin',
    },
  }))

const GoldBar = styled.img`
    /* position: absolute; */
    height: 70vmin;
    @media screen and (max-width:780px) {
        height: 100vmin;
        margin-top: 40px;
    },
`

const AboutUsSection = () => {
    return (
        <>
            <AboutUsContainer id="About-us">
                <AboutTable>
                    <Column1>
                        <TitleText>
                            About Us
                            <TitleUnderLine />
                        </TitleText>
                        <WrapText>
                            <Content1>
                                { items.content1 }
                            </Content1>
                            <Content2>
                                { items.content2 }
                            </Content2>
                            <Title2>
                                { items.Title2 }
                            </Title2>
                            <Content3>
                                { items.content3 }
                            </Content3>
                        </WrapText>
                    </Column1>
                    <Column2>
                        <div>
                            <GoldBar  className='' src={"/assets/Cubes/GoldBar.png"} typeof='' alt='logo' />
                            <CubeImg1 width={'100px'} left={'66vw'} top={'-8vh'} MLeft={'26vw'} MTop={'75vh'} className="Cube-1" src={"/assets/Cubes/GoldCube1.svg"} alt="cube1" />
                            <CubeImg2 left={'59vw'} top={'14vh'} MLeft={'7vw'} MTop={'86vh'} className="Cube-2" src={"/assets/Cubes/GoldCube2.svg"} alt="cube2" />
                            <CubeImg1 width={'118px'} left={'79vw'} top={'13vh'} MLeft={'60vw'} MTop={'84vh'} className="Cube-3" src={"/assets/Cubes/GoldCube3.svg"} alt="cube1" />
                            <CubeImg1 width={'85px'} left={'76vw'} top={'39vh'} MLeft={'60vw'} MTop={'96vh'} className="Cube-4" src={"/assets/Cubes/GoldCube4.svg"} alt="cube1" />
                            <CubeImg1 width={'86px'} left={'59vw'} top={'36vh'} MLeft={'5vw'} MTop={'93vh'} className="Cube-1" src={"/assets/Cubes/GoldCube5.svg"} alt="cube1" />
                        </div>
                    </Column2>
                </AboutTable>
            </AboutUsContainer>
        </>
    );
}

export default AboutUsSection;
