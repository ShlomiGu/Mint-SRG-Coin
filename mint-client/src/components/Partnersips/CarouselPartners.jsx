import React from "react";
import Slider from "infinite-react-carousel";
import CarouselItem from "../Hero/CarouselItem"
import { useRef } from "react";
import { Grid } from "@mui/material";
import PartnersImages from "../../Data/Partnerships";
import { SponsorsPerson } from "./Partnerships";

const CarouselPartners = () => {
  const slider = useRef(null);

  const handleForwardClick = () => {
    slider.current.slickNext();
  };

  const handlePrevClick = () => {
    slider.current.slickPrev();
  };
  return (
    <Grid item container xs={12}>
      <Grid item xs={6}>
        <Slider arrows={false} slidesToShow={6} ref={slider} className="carousel">
          {PartnersImages.map((info, index) => {          
                  return(
                      <SponsorsPerson
                          src={info.image}
                          alt='ss'
                      />
                      )})}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default CarouselPartners;
