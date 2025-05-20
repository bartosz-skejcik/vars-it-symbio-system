import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    const quickLinks = [
        { href: "/", text: "Strona główna" },
        { href: "/o-nas", text: "O nas" },
        { href: "/oferta", text: "Oferta" },
        { href: "/realizacje", text: "Realizacje" },
        { href: "/kontakt", text: "Kontakt" },
    ];

    const serviceLinks = [
        { href: "/oferta#sprzatanie-wnetrz", text: "Sprzątanie wnętrz" },
        {
            href: "/oferta#tereny-zewnetrzne",
            text: "Utrzymanie terenów zewnętrznych",
        },
        {
            href: "/oferta#obiekty-komercyjne",
            text: "Obsługa obiektów komercyjnych",
        },
        { href: "/oferta#elastycznosc", text: "Elastyczne rozwiązania" },
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "#" },
        { icon: <Linkedin size={20} />, href: "#" },
        { icon: <Instagram size={20} />, href: "#" },
    ];

    const legalLinks = [
        { href: "#", text: "Polityka prywatności" },
        { href: "#", text: "Warunki korzystania" },
        { href: "#", text: "Mapa strony" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
                    <div>
                        <img
                            src="https://placehold.co/200x60/rgb(18,144,224)/white?text=SYMBIOSYSTEM"
                            alt="Symbiosystem Logo"
                            className="h-12 w-auto mb-4"
                        />
                        <p className="text-gray-400 mb-4">
                            Profesjonalne usługi sprzątania wnętrz i obiektów
                            oraz utrzymania terenów zielonych.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-red-400 transition-colors"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-red-500 inline-block">
                            Szybkie linki
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-red-500 inline-block">
                            Nasze usługi
                        </h3>
                        <ul className="space-y-2">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 Symbiosystem. Wszelkie prawa zastrzeżone.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 text-sm text-gray-400 items-center">
                        {legalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="hover:text-white transition-colors"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
