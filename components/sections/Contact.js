import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export const Contact = ({ isSubpage = false }) => {
    const contactInfo = [
        {
            icon: <MapPin size={20} className="text-blue-600" />,
            title: "Adres:",
            content: ["05-500 Piaseczno, ul. Puławska 38"],
        },
        {
            icon: <Phone size={20} className="text-blue-600" />,
            title: "Telefon:",
            content: ["531588850"],
        },
        {
            icon: <Mail size={20} className="text-blue-600" />,
            title: "Email:",
            content: ["biuro@symbiosystem.pl"],
        },
        {
            icon: <Clock size={20} className="text-blue-600" />,
            title: "Godziny pracy:",
            content: ["Poniedziałek - Piątek: 8:00 - 16:00"],
        },
    ];

    return (
        <section
            id="kontakt"
            className={`py-16 px-4 sm:px-6 lg:px-8 ${
                !isSubpage ? "bg-white" : "bg-white"
            }`}
        >
            <div className="container mx-auto">
                {!isSubpage && (
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                            Kontakt
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            Skontaktuj się z nami, aby uzyskać więcej informacji
                            o naszych usługach.
                        </p>
                    </div>
                )}

                <div className={`relative ${isSubpage ? "bg-white" : ""}`}>
                    {/* Decorative background elements for subpage */}
                    {isSubpage && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                            <div className="absolute top-10 left-1/2 w-32 h-32 rounded-full bg-blue-300 blur-xl"></div>
                            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-blue-200 blur-xl"></div>
                            <div className="absolute top-1/3 left-20 w-24 h-24 rounded-full bg-blue-400 blur-xl"></div>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-10">
                        <div
                            className={`w-full md:w-${
                                isSubpage ? "2/5" : "1/3"
                            } mb-8 md:mb-0`}
                        >
                            <div
                                className={`bg-gray-50 p-8 rounded-lg shadow-lg h-full ${
                                    isSubpage ? "border border-blue-100" : ""
                                }`}
                            >
                                <h3 className="text-xl font-bold mb-6 text-gray-800">
                                    SYMBIOSYSTEM Sp. z o.o.
                                </h3>

                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start mb-6"
                                    >
                                        <div className="mr-3 mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                {item.title}
                                            </p>
                                            {item.content.map(
                                                (line, lineIndex) => (
                                                    <p
                                                        key={lineIndex}
                                                        className="text-gray-600"
                                                    >
                                                        {line}
                                                        {lineIndex <
                                                            item.content
                                                                .length -
                                                                1 && <br />}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className={`w-full md:w-${
                                isSubpage ? "3/5" : "2/3"
                            }`}
                        >
                            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                                {/* Google Maps embed for Puławska 38, Piaseczno */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.8042139089475!2d21.016990476938566!3d52.10867917190792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192d8c05c282d1%3A0xc39ab758ec9ff64a!2sPu%C5%82awska%2038%2C%2005-500%20Piaseczno!5e0!3m2!1sen!2spl!4v1716997147008!5m2!1sen!2spl"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokalizacja firmy"
                                    className={
                                        isSubpage
                                            ? "border-8 border-blue-100/50"
                                            : ""
                                    }
                                ></iframe>
                            </div>

                            {isSubpage && (
                                <div className="mt-8 flex justify-center md:justify-start">
                                    <Link
                                        href="https://goo.gl/maps/7PUY631wgXLyqJvR6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                                    >
                                        <MapPin size={18} className="mr-2" />
                                        Wyznacz trasę
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
