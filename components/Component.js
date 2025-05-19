import React from "react";
import { Header } from "./layout/Header";
import { Navigation } from "./layout/Navigation";
import { Footer } from "./layout/Footer";
import { Hero } from "./sections/Hero";
import { AboutUs } from "./sections/AboutUs";
import { Offer } from "./sections/Offer";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

export const Component = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full">
                <Header />
                <Navigation />
                <Hero />
                <AboutUs />
                <Offer />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};
