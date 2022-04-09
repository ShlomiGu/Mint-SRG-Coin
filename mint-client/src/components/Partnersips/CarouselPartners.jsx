import React from "react";
import Slider from "infinite-react-carousel";
import { useRef } from "react";
import { Grid } from "@mui/material";
import PartnersImages from "../../Data/Partnerships";
import { SponsorsPerson } from "./Partnerships";

const CarouselPartners = () => {
  const slider = useRef(null);
  return (
    <Grid item container xs={12}>
      <Grid item xs={6}>
        <Slider arrows={false} slidesToShow={6} ref={slider} className="carousel">
          {PartnersImages.map((info) => {          
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
