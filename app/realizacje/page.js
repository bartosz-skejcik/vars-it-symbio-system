import React from "react";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Projects } from "@/components/sections/Projects";

export default function RealizacjePage() {
    return (
        <>
            <Header />
            <Navigation />
            <div className="subpage-header bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            Realizacje
                        </h1>
                        <p className="text-xl">Nasze projekty i instalacje</p>
                    </div>
                </div>
            </div>
            <Projects isSubpage={true} />
            <Footer />
        </>
    );
}
