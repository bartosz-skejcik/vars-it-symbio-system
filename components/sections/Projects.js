import React from "react";

export const Projects = ({ isSubpage = false }) => {
    const projectItems = [
        {
            title: "Luksusowy apartamentowiec",
            description:
                "Kompleksowe utrzymanie czystości i terenów zewnętrznych",
            image: "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwwfHx8fDE3NDc1MTUyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Realizacja 1",
            fullDescription: isSubpage
                ? "Kompleksowe utrzymanie czystości i terenów zielonych dla luksusowego apartamentowca w centrum miasta. Usługi obejmują codzienne sprzątanie części wspólnych, mycie przeszkleń, pielęgnację zieleni oraz utrzymanie terenu zewnętrznego przez cały rok."
                : null,
        },
        {
            title: "Osiedle mieszkaniowe",
            description: "Utrzymanie czystości i zieleni na osiedlu zamkniętym",
            image: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVzaWRlbnRpYWwsZXN0YXRlfHx8fHx8MTY5ODM2NzUyMQ&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Realizacja 2",
            fullDescription: isSubpage
                ? "Kompleksowa obsługa ekskluzywnego osiedla mieszkaniowego obejmująca sprzątanie klatek schodowych, garaży podziemnych, dbanie o tereny zielone oraz odśnieżanie w sezonie zimowym. Praca koordynowana przez dedykowanego managera z częstymi kontrolami jakości."
                : null,
        },
        {
            title: "Powierzchnia biurowa",
            description: "Sprzątanie biurowca klasy A w centrum miasta",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGNsZWFufGVufDB8fHx8MTc0NzUxNTIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Realizacja 3",
            fullDescription: isSubpage
                ? "Codzienna obsługa nowoczesnego biurowca klasy A o powierzchni 5000m². Zakres usług obejmuje codzienne sprzątanie biur, sal konferencyjnych, sanitariatów oraz części wspólnych budynku. Usługi realizowane są w godzinach porannych i wieczornych, aby nie zakłócać pracy najemców."
                : null,
        },
    ];

    // Additional projects for subpage view
    const additionalProjects = isSubpage
        ? [
              {
                  title: "Hala produkcyjna",
                  description: "Sprzątanie hal produkcyjnych i magazynowych",
                  image: "https://images.unsplash.com/photo-1524001319271-996aad998fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FyZWhvdXNlLGNsZWFufHx8fHx8MTY5ODM2ODUyMQ&ixlib=rb-4.0.3&q=80&w=1080",
                  alt: "Realizacja 4",
                  fullDescription:
                      "Kompleksowa obsługa hal produkcyjnych i magazynowych o łącznej powierzchni 12 000m². Codzienny serwis obejmuje sprzątanie ciągów komunikacyjnych, biur, szatni i sanitariatów. Okresowo wykonywane jest czyszczenie maszynowe powierzchni produkcyjnych i magazynowych zgodnie z wymaganiami bezpieczeństwa i higieny pracy.",
              },
              {
                  title: "Centrum handlowe",
                  description:
                      "Utrzymanie czystości w dużym obiekcie handlowym",
                  image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHBpbmcsbWFsbCxjbGVhbnx8fHx8fDE2OTgzNjg2MjE&ixlib=rb-4.0.3&q=80&w=1080",
                  alt: "Realizacja 5",
                  fullDescription:
                      "Profesjonalne usługi sprzątania centrum handlowego o powierzchni 20 000m². Nasze usługi realizowane są 7 dni w tygodniu i obejmują sprzątanie pasaży, toalet, wejść do obiektu oraz terenów zewnętrznych. Elastyczny system zarządzania personelem pozwala na zwiększenie obsady podczas szczytów zakupowych oraz wydarzeń specjalnych.",
              },
          ]
        : [];

    // Combine all projects
    const displayProjects = [...projectItems, ...additionalProjects];

    return (
        <section
            id="realizacje"
            className={`py-16 px-4 sm:px-6 lg:px-8 ${
                !isSubpage ? "bg-gray-50" : "bg-white"
            }`}
        >
            <div className="container mx-auto px-2 sm:px-0">
                {!isSubpage && (
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                            Realizacje
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            Firmy, które nam zaufały
                        </p>
                    </div>
                )}

                {isSubpage && (
                    <div className="mb-8">
                        <h3 className="text-xl text-blue-600 font-medium mb-2">
                            Firmy, które nam zaufały
                        </h3>
                    </div>
                )}

                <div className={`relative ${isSubpage ? "bg-white" : ""}`}>
                    {/* Decorative background elements for subpage */}
                    {isSubpage && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                            <div className="absolute top-40 right-20 w-36 h-36 rounded-full bg-blue-200 blur-xl"></div>
                            <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-blue-300 blur-xl"></div>
                            <div className="absolute top-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-400 blur-xl"></div>
                        </div>
                    )}

                    {isSubpage ? (
                        <div className="grid grid-cols-1 gap-16">
                            {displayProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col ${
                                        index % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    } bg-gray-50 rounded-lg overflow-hidden shadow-lg`}
                                >
                                    <div className="md:w-1/2 h-80 md:h-96">
                                        <div className="h-full border-8 border-blue-100/50">
                                            <img
                                                src={project.image}
                                                alt={project.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                            {project.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                        <p className="text-gray-700">
                                            {project.fullDescription}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
                            {displayProjects
                                .slice(0, 3)
                                .map((project, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-72"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 text-white">
                                                <h3 className="font-bold text-lg">
                                                    {project.title}
                                                </h3>
                                                <p>{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

                {!isSubpage && (
                    <div className="mt-12 text-center">
                        <a
                            href="/realizacje"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            WSZYSTKIE REALIZACJE
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};
