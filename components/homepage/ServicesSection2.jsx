"use client";

import Image from "next/image";

const services = [
  {
    title: "Dělení materiálu",
    description: ["CNC kotoučová pila", "NC pásová pila"],
    color: "text-blue-600",
    icon: "/icons/services/service1.svg",
  },
  {
    title: "Soustružení",
    description: [
      "Automatické předávání dílce",
      "Soustružení z tyčí a přířezů",
      "Hrubování velkých dílů",
    ],
    color: "text-teal-600",
    icon: "/icons/services/service2.svg",
  },
  {
    title: "Frézování",
    description: ["4osé frézování", "Horizontální frézování velkých dílů"],
    color: "text-indigo-600",
    icon: "/icons/services/service3.svg",
  },
  {
    title: "Broušení",
    description: [
      "Bezhroté broušení",
      "Broušení na kulato (mezi hroty, otvory, vnitřní, vnější)",
      "Broušení na plocho",
    ],
    color: "text-cyan-600",
    icon: "/icons/services/service4.svg",
  },
  {
    title: "Speciální obrábění",
    description: [
      "Drátové řezání",
      "Odvalovací frézování ozubení (řetězová a ozubená kola)",
      "Válcování závitů",
    ],
    color: "text-sky-600",
    icon: "/icons/services/service5.svg",
  },
  {
    title: "Tepelné zpracování",
    description: ["Žíhání", "Vsázka 640 × 770 × 500 mm, hmotnost do 1t"],
    color: "text-blue-500",
    icon: "/icons/services/service6.svg",
  },
];

export default function ServicesSection2() {
  return (
    <section className="relative py-24">
      {/* Background image */}
      <Image
        src="/images/cnc/cnc2.webp"
        alt="CNC coolant background"
        fill
        className="object-cover object-center"
      />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-7xl font-bold text-white text-center mb-12">
          Naše služby
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-black/60 backdrop-blur-sm shadow-lg p-6 border border-white/20 transition-transform"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3
                  className={`text-xl font-semibold ${service.color} drop-shadow`}
                >
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-100">
                {service.description.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
