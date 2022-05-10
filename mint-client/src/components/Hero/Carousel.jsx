import React from "react";
import Slider from "infinite-react-carousel";
import CarouselItem from "./CarouselItem";
import CarouselNavButton from "./CarouselNavButton";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Grid } from "@mui/material";
import styled from 'styled-components'

const CarouselContainer = styled.div`
  display: flex;

  @media screen and (min-width: 769px) {
    justify-content: flex-end;
    margin-left: 93vw;
  }
`;

const WrapButtom = styled.div`
  display: block;
  z-index: 1;
  margin-right: 2vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Carousel = () => {
  const slider = useRef(null);

  const handleForwardClick = () => {
    slider.current.slickNext();
  };

  const handlePrevClick = () => {
    slider.current.slickPrev();
  };
  return (
    // <Grid item container xs={12} justifyContent={'flex-end'}>
      <CarouselContainer data-aos="fade-left" data-aos-delay="3000">        
      <Grid item xs={1} display={'flex'} alignItems={'center'}>
        <WrapButtom>
          <CarouselNavButton icon={faAngleLeft} onClick={handlePrevClick}/>
          <CarouselNavButton icon={faAngleRight} onClick={handleForwardClick} />
        </WrapButtom>
      </Grid>
      <Grid item xs={6}>
        <Slider arrows={false} slidesToShow={2.4} ref={slider} className="carousel" >
            <CarouselItem
              title={"Article Title"}
              image={"/assets/logo.png"}
            ></CarouselItem>
          <CarouselItem
            title={"Article Title"}
            image={"/assets/logo.png"}
            ></CarouselItem>
          <CarouselItem
            title={"Article Title"}
            image={"/assets/logo.png"}
            ></CarouselItem>
          <CarouselItem
            title={"Article Title"}
            image={"/assets/logo.png"}
            ></CarouselItem>
          <CarouselItem
            title={"Article Title"}
            image={"/assets/logo.png"}
            ></CarouselItem>
        </Slider>
      </Grid>
      </CarouselContainer>
    /* </Grid> */
  );
};

export default Carousel;
