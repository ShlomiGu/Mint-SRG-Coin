import React from "react";
import Slider from "infinite-react-carousel";
import { useRef } from "react";
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
    <Slider arrows={false} slidesToShow={5} ref={slider} className="carousel" centerMode>
      {PartnersImages.map((info, index) => {
        return <SponsorsPerson src={info.image} alt="ss" />;
      })}
    </Slider>
  );
};

export default CarouselPartners;
