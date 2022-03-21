import React from "react";
import Advantages from "../themes/Advantages";
import Ecosystem from "../themes/Ecosystem";
import FAQ from "../themes/FAQ";
import Hero from "../themes/Hero";
import Opportunity from "../themes/Opportunity";
import Partnerships from "../themes/Partnerships";
import Roadmap from "../themes/Roadmap";

function Home() {
    return (
        <>
            <Hero />
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