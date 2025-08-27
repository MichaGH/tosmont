"use client";

import Image from "next/image";
import Service from "../vectors/icons/Service";
import ServicesButton from "../customs/ServicesButton";
const services = [
    {
        title: "Dělení materiálu",
        highlight: "Přesné nařezání polotovarů jako základ pro další výrobu.",
        description: [
            "CNC kotoučová pila pro rychlé sériové řezy",
            "NC pásová pila pro dlouhé a masivní dílce",
            "Kvalitní příprava materiálu pro obrábění",
        ],
        icon: "/icons/services/service1.svg",
        color: "#FBBF24", // muted yellow/gold
    },
    {
        title: "CNC obrábění",
        highlight: "Soustružení a frézování složitých i rozměrných dílů.",
        description: [
            "Soustružení z tyčí, přířezů a velkých kusů",
            "4osé a horizontální CNC frézování",
            "Drátové řezání jemných detailů",
        ],
        icon: "/icons/services/service2.svg",
        color: "#22C55E", // muted green
    },
    {
        title: "Broušení",
        highlight: "Precizní dokončení povrchu pro maximální přesnost.",
        description: [
            "Bezhroté broušení menších součástí",
            "Broušení otvorů, čel a průměrů mezi hroty",
            "Plošné broušení pro finální kvalitu povrchu",
        ],
        icon: "/icons/services/service3.svg",
        color: "#DC2626", // deep red
    },
    {
        title: "Speciální výroba",
        highlight: "Zakázkové tvary a konstrukce podle potřeb zákazníka.",
        description: [
            "Odvalovací frézování ozubení a výroba kol",
            "Válcování závitů s vysokou přesností",
            "Zámečnické práce a kovové konstrukce",
        ],
        icon: "/icons/services/service4.svg",
        color: "#EA580C", // burnt orange
    },
    {
        title: "Tepelné zpracování",
        highlight: "Žíhání pro zlepšení mechanických vlastností materiálu.",
        description: [
            "Rozměry vsázky až 640 × 770 × 500 mm",
            "Nosnost pece do 1 tuny",
            "Stabilní a kontrolované teplotní podmínky",
        ],
        icon: "/icons/services/service5.svg",
        color: "#7C3AED", // industrial purple
    },
    {
        title: "Kontrola a servis",
        highlight: "Měření kvality i komplexní péče o výrobní stroje.",
        description: [
            "3D měřidla, tvrdostní testy a profil projektory",
            "Klasická měřidla pro běžnou výrobu",
            "Opravy a stěhování strojů a linek do 25 tun",
        ],
        icon: "/icons/services/service6.svg",
        color: "#DB2777", // muted pink/fuchsia
    },
];



export default function ServicesSection4() {
    return (
        <section className="relative font-space-grotesk py-14">
            {/* Background CNC image */}
            <Image
                src="/images/cnc/cnc4.webp"
                alt="CNC background"
                fill
                className="object-cover object-center"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-gray-900/50 z-0"></div>

            {/* Section content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-20 drop-shadow-lg">
                    Naše služby
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24">
                    {services.map((service, i) => (
                        <ServiceCard service={service} key={i} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-16">
{/*                 <button className="relative px-8 py-4 bg-blue-600 text-white font-semibold shadow-lg overflow-hidden group hover:bg-blue-400 hover:text-black animate-pulse transition">
                    <span className="relative z-10">Zjistit více</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
                </button> */}
                
                <ServicesButton />

            </div>
        </section>
    );
}

function ServiceCard({ service }) {
    return (
        <div

            className="relative group bg-black/50 rounded-3xl p-8 pt-20 hover:scale-105 transition-transform shadow-2xl overflow-visible"
        >
            {/* Floating icon */}
            <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 bg-black border-1 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg`}
                style={{ borderColor: service.color }}
            >
                <Service color={service.color} className="h-14 w-14" />
                {/* <Image
                    src="/images/services/service.svg"
                    alt={service.title}
                    width={48}
                    height={48}
                    className="object-contain invert"
                /> */}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-white text-center mb-2">
                {service.title}
            </h3>
            <p className="text-gray-300 text-center mb-4">{service.highlight}</p>
            <ul className="text-gray-400 text-sm space-y-2">
                {service.description.map((item, j) => (
                    <li key={j} className="space-x-2">
                        <span className="w-[2px] h-[50px] border-2"
                            style={{ borderColor: service.color }}
                        ></span>
                        <span>{item}</span>

                    </li>
                ))}
            </ul>

            {/* Subtle floating glow effect */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-white/5 blur-2xl opacity-30 pointer-events-none"></div>
        </div>
    )
}