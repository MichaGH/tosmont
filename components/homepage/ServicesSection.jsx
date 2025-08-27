const services = [
    {
        title: "Dělení materiálu",
        description: ["CNC kotoučová pila", "NC pásová pila"],
        color: "text-blue-400",
    },
    {
        title: "Soustružení",
        description: [
            "Automatické předávání dílce",
            "Soustružení z tyčí a přířezů",
            "Hrubování velkých dílů",
        ],
        color: "text-teal-400",
    },
    {
        title: "Frézování",
        description: ["4osé frézování", "Horizontální frézování velkých dílů"],
        color: "text-indigo-400",
    },
    {
        title: "Broušení",
        description: [
            "Bezhroté broušení",
            "Broušení na kulato (mezi hroty, otvory, vnitřní, vnější)",
            "Broušení na plocho",
        ],
        color: "text-cyan-400",
    },
    {
        title: "Speciální obrábění",
        description: [
            "Drátové řezání",
            "Odvalovací frézování ozubení (řetězová a ozubená kola)",
            "Válcování závitů",
        ],
        color: "text-sky-400",
    },
    {
        title: "Tepelné zpracování",
        description: ["Žíhání", "Vsázka 640 × 770 × 500 mm, hmotnost do 1t"],
        color: "text-blue-300",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="w-full bg-gray-900 py-20 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Naše služby
                </h2>
                <div className="flex flex-col w-full">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
                        {services.map((service) => (
                            <div key={service.title} className="p-8">
                                {/* Icon placeholder */}
                                <img
                                    src="/icons/test.svg"
                                    alt="Service icon"
                                    className={`w-12 h-12 mb-6 ${service.color}`}
                                />

                                <h3
                                    className={`text-xl font-semibold mb-4 ${service.color}`}
                                >
                                    {service.title}
                                </h3>

                                <ul className="space-y-2 text-gray-300">
                                    {service.description.map((item, idx) => (
                                        <li key={idx}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button className="text-blue-600 text-4xl px-4 py-2 border-4 border-blue-600 mx-auto"> Více </button>
                </div>
            </div>
        </section>
    );
}