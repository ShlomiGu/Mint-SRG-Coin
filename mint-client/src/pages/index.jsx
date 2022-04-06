import React from "react";
import HeroSection from "../components/Hero/Hero";
import AboutUs from "../themes/AboutUs";
import Advantages from "../themes/Advantages";
import Ecosystem from "../themes/Ecosystem";
import FAQ from "../themes/FAQ/FAQ";
import Opportunity from "../themes/Opportunity";
import Partnerships from "../themes/Partnerships";
import Roadmap from "../themes/Roadmap";

function Home() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Opportunity />
            <Ecosystem />
            <Roadmap />
            <Advantages />
            <Partnerships />
            <FAQ />
        </>
    )
}

export default Home;