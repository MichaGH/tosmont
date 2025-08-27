"use client";

import Image from "next/image";
import Service from "../vectors/icons/Service";

const services = [
  {
    title: "Dělení materiálu",
    tagline: "Přesné dělení CNC a NC pilami",
    description: ["CNC kotoučová pila", "NC pásová pila"],
    image: "/images/services/service.svg",
    color: "border-blue-500",
  },
  {
    title: "Soustružení",
    tagline: "Soustružení na CNC strojích",
    description: [
      "Automatické předávání dílce",
      "Soustružení z tyčí a přířezů",
      "Hrubování velkých dílů",
    ],
    image: "/images/services/service.svg",
    color: "border-teal-500",
  },
  {
    title: "Frézování",
    tagline: "CNC frézování až ve 4 osách",
    description: [
      "4osé frézování",
      "Horizontální frézování velkých dílů",
      "Drátové řezání",
    ],
    image: "/images/services/service.svg",
    color: "border-indigo-500",
  },
  {
    title: "Broušení",
    tagline: "Broušení na kulato i na plocho",
    description: [
      "Bezhroté broušení",
      "Na kulato (mezi hroty, otvory, vnitřní, vnější)",
      "Broušení na plocho",
    ],
    image: "/images/services/service.svg",
    color: "border-cyan-500",
  },
  {
    title: "Speciální obrábění",
    tagline: "Komplexní ozubení a závity",
    description: [
      "Odvalovací frézování ozubení",
      "Řetězová a ozubená kola",
      "Válcování závitů",
    ],
    image: "/images/services/service.svg",
    color: "border-sky-500",
  },
  {
    title: "Tepelné zpracování a kontrola",
    tagline: "Žíhání a precizní měření",
    description: [
      "Žíhání (vsázka 640×770×500 mm, do 1t)",
      "MITUTOYO Crysta Apex 3D měřidlo",
      "Tvrdostní testy ROCKY 2000",
    ],
    image: "/images/services/service.svg",
    color: "border-blue-400",
  },
];

export default function ServicesSection3() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Naše služby
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 ${service.color} hover:shadow-xl transition`}
            >
              {/* Image */}
              <div className="relative h-16 w-16 mx-auto">
                <Service color={"#FF0000"}/>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className=""
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.tagline}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {service.description.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
