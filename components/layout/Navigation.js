import React from "react";
import { Menu, ArrowRight } from "lucide-react";

export const Navigation = () => {
    const navLinks = [
        { href: "/o-nas", text: "O nas" },
        { href: "/oferta", text: "Oferta" },
        { href: "/realizacje", text: "Realizacje" },
    ];

    return (
        <nav className="bg-white py-4 px-4 sm:px-6 lg:px-8 shadow-md">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
                <a
                    href="/"
                    className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0"
                >
                    <img
                        src="https://placehold.co/200x60/rgb(18,144,224)/white?text=SYMBIOSYSTEM"
                        alt="Symbiosystem Logo"
                        className="h-12 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
                        keywords="logo, company logo, symbiosystem"
                    />
                </a>

                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>

                <a
                    href="/kontakt"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                >
                    KONTAKT
                </a>

                <details className="sm:hidden relative mt-4 w-full">
                    <summary className="list-none cursor-pointer p-2 flex justify-center">
                        <Menu size={28} className="text-blue-600" />
                    </summary>
                    <div className="absolute right-0 left-0 sm:left-auto mt-2 w-full sm:w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                            >
                                {link.text}
                            </a>
                        ))}
                        <a
                            href="/kontakt"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                            Kontakt
                        </a>
                    </div>
                </details>
            </div>
        </nav>
    );
};
