import React, { useState, useEffect } from "react";
import HeroSection from "../components/Hero/Hero";
import AboutUs from "../themes/AboutUs";
import Advantages from "../themes/Advantages";
import Ecosystem from "../themes/Ecosystem";
import FAQ from "../themes/FAQ/FAQ";
import Opportunity from "../themes/Opportunity";
import Partnerships from "../themes/Partnerships";
import RoadmapContainer from "../components/Roadmap/RoadmapContainer";
import ChartPieSection from "../components/ChartPie";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutUs />
            <Opportunity />
            <Ecosystem />
            <ChartPieSection />
            <RoadmapContainer />
            <Advantages />
            <Partnerships />
            <FAQ />
        </>
    )
}

export default Home;