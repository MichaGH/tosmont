import Image from 'next/image'
import React from 'react'

/* SERVICES GLASS EFFECT LIGHT */

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
export default function ServicesSection2() {
    {/* <Image src="/images/cnc/cnc6.webp" fill/> */}
  return (
<section className="relative py-24">
      {/* Background image */}
      <Image
        src="/images/cnc/cnc6.webp"
        alt="CNC coolant background"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Naše služby
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/20 hover:scale-105 transition-transform"
            >
              <h3 className={`text-xl font-semibold mb-4 ${service.color}`}>
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-200">
                {service.description.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
