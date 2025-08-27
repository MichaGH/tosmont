"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jan Novák",
    role: "Vedoucí výroby, TechMetal s.r.o.",
    text: "Spolupráce s TOSMONT servis předčila naše očekávání. Díly byly dodány včas, v perfektní kvalitě a komunikace byla vždy rychlá a férová.",
  },
  {
    name: "Petra Dvořáková",
    role: "Nákupčí, AutoParts CZ",
    text: "Velmi si ceníme flexibility a schopnosti rychle reagovat na změny. Díky nim jsme zvládli i urgentní zakázky bez zpoždění.",
  },
  {
    name: "Martin Svoboda",
    role: "CEO, Maschinenbau GmbH (DE)",
    text: "Jsme dlouhodobým partnerem a oceňujeme profesionalitu a spolehlivost. Díky moderním technologiím a zkušenému týmu je výsledek vždy precizní.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 bg-gray-50 font-space-grotesk">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 uppercase ">Reference</h2>
          <p className="mt-4 text-lg text-gray-600">
            Co o nás říkají naši zákazníci
          </p>
        </div>

        {/* Grid of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between"
            >
              <p className="text-gray-700 leading-relaxed mb-6">“{t.text}”</p>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
