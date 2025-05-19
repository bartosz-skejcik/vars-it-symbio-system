"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroButtons = [
        { href: "/o-nas", text: "O nas" },
        { href: "/oferta", text: "Oferta" },
        { href: "/realizacje", text: "Realizacje" },
    ];

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2F0ZXIsdGVjaG5vbG9neXx8fHx8fDE2OTgzNjY4MDc&ixlib=rb-4.0.3&q=80&w=1500",
            title: "Profesjonalne usługi sprzątania wnętrz i obiektów oraz utrzymania terenów zielonych",
            subtitle: "",
            alt: "Profesjonalne usługi sprzątania",
        },
        {
            image: "https://images.unsplash.com/photo-1523878288860-7ad281611901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2F0ZXIscGxhbnR8fHx8fHwxNjk4MzY4ODIx&ixlib=rb-4.0.3&q=80&w=1500",
            title: "Wieloletnie doświadczenie, kompleksowe usługi na najwyższym poziomie",
            subtitle: "",
            alt: "Kompleksowe usługi na najwyższym poziomie",
        },
    ];

    // Function to go to the next slide with looping
    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-rotate slides every 7 seconds
    useEffect(() => {
        const interval = setInterval(goToNextSlide, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen max-h-[800px]">
            <div className="carousel relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        id={`slide-${index}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                        <div className="w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20">
                            <div className="max-w-2xl text-white">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                {slide.subtitle && (
                                    <p className="text-xl sm:text-2xl mb-8 drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                )}

                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 w-full sm:w-auto">
                                    {heroButtons.map((button, idx) => (
                                        <Link
                                            key={idx}
                                            href={button.href}
                                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
                                        >
                                            {button.text}
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href="/oferta"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    ZOBACZ OFERTĘ
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${
                                index === currentSlide
                                    ? "opacity-100 w-10"
                                    : "opacity-70"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={
                                index === currentSlide ? "true" : "false"
                            }
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};
