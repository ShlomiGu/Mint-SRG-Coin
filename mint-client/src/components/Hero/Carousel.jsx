import React from "react";
import Slider from "infinite-react-carousel";
import CarouselItem from "./CarouselItem";
import CarouselNavButton from "./CarouselNavButton";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Grid } from "@mui/material";

const Carousel = () => {
  const slider = useRef(null);

  const handleForwardClick = () => {
    slider.current.slickNext();
  };

  const handlePrevClick = () => {
    slider.current.slickPrev();
  };
  return (
    <Grid item container xs={12} justifyContent={'flex-end'}>
      <Grid item xs={1} display={'flex'} alignItems={'center'}>
        <div>
          <CarouselNavButton icon={faAngleLeft} onClick={handlePrevClick}/>
          <CarouselNavButton icon={faAngleRight} onClick={handleForwardClick} />
        </div>
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
    </Grid>
  );
};

export default Carousel;
