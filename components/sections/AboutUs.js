import React from "react";

export const AboutUs = ({ isSubpage = false }) => {
    const aboutSections = [
        {
            title: "O nas",
            content: [
                "SYMBIOSYSTEM jest spółką oferującą szeroki zakres usług w dziedzinie sprzątania wnętrz obiektów oraz utrzymania terenów zewnętrznych. Naszą ofertę szczególnie kierujemy do Administratorów osiedli, magazynów i składowisk, hal produkcyjnych, powierzchni biurowych oraz innych obiektów komercyjnych.",
                "Głównym celem SYMBIOSYSTEM jest realizacja działań prowadzących do kompleksowego utrzymania czystości przy zachowaniu optymalnych kosztów świadczeń. Obsługujemy bardzo wymagające zlecenia miedzy innymi luksusowe apartamentowce, ekskluzywne osiedla oraz powierzchnie biurowe.",
            ],
            image: "https://images.unsplash.com/photo-1616996691973-0560486764f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGNvbW1lcmNpYWx8ZW58MHx8fHwxNzQ3NTE1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Profesjonalne sprzątanie",
            caption: "Profesjonalne usługi sprzątania",
            reversed: false,
        },
        {
            title: "Nasze doświadczenie",
            content: [
                "Nasze doświadczenie w usługach związanych z obsługą obiektów oraz niewątpliwy zapał i entuzjazm tworzenia skupiliśmy w jedną całość.",
                "Dzięki gospodarskiemu spojrzeniu na problemy obiektu, dbałości o szczegóły oraz umiejętności słuchania jego użytkowników potrafiliśmy zbudować naszą jakość – Jakość SYMBIOSYSTEM",
            ],
            image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tbWVyY2lhbCxjbGVhbmluZyx0ZWFtfHx8fHx8MTY5ODM2NzAyMQ&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Doświadczony zespół",
            caption: "Doświadczony zespół profesjonalistów",
            reversed: true,
        },
    ];

    // Additional content for subpage
    const subpageContent = isSubpage
        ? [
              {
                  title: "Jakość SYMBIOSYSTEM",
                  content: [
                      "Głównym celem SYMBIOSYSTEM jest realizacja działań prowadzących do kompleksowego utrzymania czystości przy zachowaniu optymalnych kosztów świadczeń. Obsługujemy bardzo wymagające zlecenia miedzy innymi luksusowe apartamentowce, ekskluzywne osiedla oraz powierzchnie biurowe.",
                      "Dzięki gospodarskiemu spojrzeniu na problemy obiektu, dbałości o szczegóły oraz umiejętności słuchania jego użytkowników potrafiliśmy zbudować naszą jakość – Jakość SYMBIOSYSTEM.",
                  ],
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xlYW5pbmcscHJvZmVzc2lvbmFsfHx8fHx8MTY5ODM2ODAyMQ&ixlib=rb-4.0.3&q=80&w=1080",
                  alt: "Profesjonalne usługi",
                  caption: "Najwyższa jakość usług",
                  reversed: false,
              },
          ]
        : [];

    // Combine sections based on whether it's a subpage or not
    const displaySections = isSubpage
        ? [...aboutSections, ...subpageContent]
        : aboutSections;

    return (
        <section
            id="o-nas"
            className={`py-16 px-4 sm:px-6 lg:px-8 ${
                !isSubpage ? "bg-gray-50" : "bg-white"
            }`}
        >
            <div className="container mx-auto">
                {!isSubpage && (
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                            O nas
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                    </div>
                )}

                {isSubpage && (
                    <div className="mb-8">
                        <h3 className="text-xl text-blue-600 font-medium mb-2">
                            Poznaj nas i nasze możliwości
                            <span className="inline-block ml-2 h-2 w-2 rounded-full bg-red-500"></span>
                        </h3>
                    </div>
                )}

                <div className={isSubpage ? "bg-white relative" : ""}>
                    {/* Decorative background elements for subpage */}
                    {isSubpage && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-300 blur-xl"></div>
                            <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-blue-200 blur-xl"></div>
                            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-red-400 blur-xl"></div>
                        </div>
                    )}

                    {displaySections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${
                                section.reversed
                                    ? "md:flex-row-reverse"
                                    : "md:flex-row"
                            } items-center ${
                                index < displaySections.length - 1
                                    ? "mb-16"
                                    : ""
                            } gap-12 md:gap-8`}
                        >
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800 relative">
                                    {section.title}
                                    <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-500"></span>
                                </h3>
                                {section.content.map((paragraph, pIndex) => (
                                    <p
                                        key={pIndex}
                                        className={`${
                                            pIndex < section.content.length - 1
                                                ? "mb-4"
                                                : ""
                                        } text-gray-700`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                                <div
                                    className={`relative overflow-hidden ${
                                        isSubpage
                                            ? "border-8 border-blue-200/50 shadow-lg"
                                            : "rounded-lg shadow-xl"
                                    } transition-transform duration-300 hover:scale-[1.02] group h-80 md:h-96`}
                                >
                                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-red-500 border-l-[40px] border-l-transparent z-10"></div>
                                    <img
                                        src={section.image}
                                        alt={section.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white p-4 font-medium">
                                            {section.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
