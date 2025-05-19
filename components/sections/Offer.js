import React from "react";
import Link from "next/link";

export const Offer = ({ isSubpage = false }) => {
    const offerItems = [
        {
            title: "Sprzątanie wnętrz",
            description:
                "Kompleksowe usługi utrzymania czystości w budynkach biurowych, apartamentowcach i innych obiektach komercyjnych.",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xlYW5pbmcsb2ZmaWNlfHx8fHx8MTY5ODM2NzEyMQ&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sprzątanie wnętrz",
            link: "/oferta#sprzatanie-wnetrz",
            fullDescription: isSubpage
                ? "Oferujemy profesjonalne usługi sprzątania wnętrz dla różnorodnych obiektów komercyjnych, w tym biurowców, apartamentowców, magazynów i hal produkcyjnych. Nasze zespoły są wyposażone w profesjonalny sprzęt i środki, które pozwalają utrzymać najwyższe standardy czystości. Zakres prac ustalamy indywidualnie, dopasowując nasze usługi do potrzeb każdego obiektu."
                : null,
        },
        {
            title: "Utrzymanie terenów zewnętrznych",
            description:
                "Profesjonalne usługi dbania o tereny zielone i utrzymanie porządku wokół obiektów komercyjnych.",
            image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2FyZGVuLG1haW50ZW5hbmNlfHx8fHx8MTY5ODM2NzIyMQ&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Utrzymanie terenów zewnętrznych",
            link: "/oferta#tereny-zewnetrzne",
            fullDescription: isSubpage
                ? "Zajmujemy się kompleksową opieką nad terenami zewnętrznymi, które są wizytówką każdego obiektu. Nasze usługi obejmują pielęgnację terenów zielonych, utrzymanie czystości chodników, parkingów i innych powierzchni zewnętrznych. Dzięki regularnej pielęgnacji i dbałości o detale, gwarantujemy, że otoczenie Twojego obiektu zawsze będzie prezentować się nienagannie."
                : null,
        },
        {
            title: "Obsługa obiektów komercyjnych",
            description:
                "Kompleksowe usługi dla administratorów osiedli, magazynów, hal produkcyjnych i powierzchni biurowych.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tbWVyY2lhbCxidWlsZGluZ3x8fHx8fDE2OTgzNjczMjE&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Obsługa obiektów komercyjnych",
            link: "/oferta#obiekty-komercyjne",
            fullDescription: isSubpage
                ? "Szczególnie kierujemy naszą ofertę do Administratorów osiedli, magazynów i składowisk, hal produkcyjnych, powierzchni biurowych oraz innych obiektów komercyjnych. Wykazujemy dużą elastyczność w zarządzaniu personelem, dzięki czemu z łatwością możemy zwiększyć obsady serwisu w czasie, gdy jest to potrzebne, bez konieczności stałych obciążeń dla naszych Klientów."
                : null,
        },
    ];

    // Additional offer items for subpage
    const additionalOfferItems = isSubpage
        ? [
              {
                  title: "Elastyczne rozwiązania",
                  description:
                      "Dostosowujemy częstotliwość i zakres usług do indywidualnych potrzeb klientów.",
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xlYW5pbmcsc2VydmljZXx8fHx8fDE2OTgzNjgxMjE&ixlib=rb-4.0.3&q=80&w=1080",
                  alt: "Elastyczne rozwiązania",
                  link: "/oferta#elastycznosc",
                  fullDescription:
                      "Spełniamy oczekiwania dotyczące częstotliwości i czasu wykonywania naszych usług. Zakres prac ustalamy indywidualnie, dzięki czemu rzetelnie wyceniamy nasze świadczenia. Wykazujemy dużą elastyczność w zarządzaniu personelem, co pozwala nam efektywnie odpowiadać na zmieniające się potrzeby naszych klientów.",
              },
          ]
        : [];

    // Combine all items
    const displayItems = [...offerItems, ...additionalOfferItems];

    return (
        <section
            id="oferta"
            className={`py-16 px-4 sm:px-6 lg:px-8 ${
                !isSubpage ? "bg-white" : "bg-white"
            }`}
        >
            <div className="container mx-auto">
                {!isSubpage && (
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                            Oferta
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            Usługi kompleksowego utrzymania czystości obiektów
                            oraz opieki nad terenem zielonym
                        </p>
                    </div>
                )}

                {isSubpage && (
                    <div className="mb-8">
                        <h3 className="text-xl text-blue-600 font-medium mb-2">
                            Usługi kompleksowego utrzymania czystości obiektów
                            oraz opieki nad terenem zielonym
                        </h3>
                        <p className="text-gray-700 mb-8">
                            SYMBIOSYSTEM w ramach swej działalności oferuje
                            usługi kompleksowego utrzymania czystości obiektów
                            oraz opieki nad terenem zielonym. Głównym celem
                            SYMBIOSYSTEM jest realizacja działań prowadzących do
                            kompleksowego utrzymania czystości przy zachowaniu
                            optymalnych kosztów świadczeń. Nasze usługi
                            wykonywane są przez doświadczoną kadrę
                            wykorzystującą profesjonalny sprzęt i środki. Prace
                            organizowane i nadzorowane są przez sprawdzonych
                            przy innych realizacjach Koordynatorów projektu,
                            pozostających w pełni do dyspozycji naszych
                            Klientów.
                        </p>
                    </div>
                )}

                <div className={`relative ${isSubpage ? "bg-white" : ""}`}>
                    {/* Decorative background elements for subpage */}
                    {isSubpage && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                            <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-blue-200 blur-xl"></div>
                            <div className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-blue-300 blur-xl"></div>
                            <div className="absolute top-1/3 left-1/2 w-24 h-24 rounded-full bg-blue-400 blur-xl"></div>
                        </div>
                    )}

                    <div
                        className={
                            isSubpage
                                ? "grid grid-cols-1 gap-12"
                                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        }
                    >
                        {displayItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${isSubpage ? "mb-16" : ""}`}
                            >
                                {isSubpage ? (
                                    <div
                                        id={item.link.split("#")[1]}
                                        className="scroll-mt-24"
                                    >
                                        <div
                                            className={`bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl ${
                                                index % 2 === 0
                                                    ? "md:flex"
                                                    : "md:flex md:flex-row-reverse"
                                            }`}
                                        >
                                            <div className="md:w-2/5 h-80 md:h-auto overflow-hidden">
                                                <div className="h-full border-8 border-blue-100/50">
                                                    <img
                                                        src={item.image}
                                                        alt={item.alt}
                                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-8 md:w-3/5">
                                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6">
                                                    {item.description}
                                                </p>
                                                <p className="text-gray-700">
                                                    {item.fullDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold mb-3 text-gray-800">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 flex-grow">
                                                {item.description}
                                            </p>
                                            <Link
                                                href={item.link}
                                                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
                                            >
                                                Dowiedz się więcej
                                                <span className="material-symbols-outlined ml-1 text-sm">
                                                    arrow_forward
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {!isSubpage && (
                    <div className="mt-12 text-center">
                        <Link
                            href="/oferta"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            PEŁNA OFERTA
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
