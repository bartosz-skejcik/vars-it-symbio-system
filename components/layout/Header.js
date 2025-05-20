import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Header = () => {
    const contactInfo = [
        {
            icon: <Phone size={18} className="text-neutral-300" />,
            text: "531588850",
        },
        {
            icon: <Mail size={18} className="text-neutral-300" />,
            text: "biuro@symbiosystem.pl",
        },
        {
            icon: <MapPin size={18} className="text-neutral-300" />,
            text: "ul. Puławska 38, Piaseczno",
        },
    ];

    return (
        <header className="bg-blue-600 text-white py-2 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-col w-full sm:flex-row sm:space-x-6 mb-3 sm:mb-0 space-y-2 sm:space-y-0">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center mb-1 sm:mb-0"
                        >
                            <span className="mr-2">{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};
