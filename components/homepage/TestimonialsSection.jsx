"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GalleryClientHomepage from "./gallery_homepage/GalleryClientHomepage";
const galleryItems = [
    "/images/references/1.jpg",
    "/images/references/2.jpg",
    "/images/references/3.webp",
    "/images/references/4.webp",
    "/images/references/5.jpg",
    "/images/references/6.webp",
    "/images/references/7.webp",
    "/images/references/8.webp",
    "/images/references/9.webp",
    "/images/references/10.webp",
    "/images/references/10.webp",
    "/images/references/10.webp"
]
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
                <div className="text-center mb-8">
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
                <div className="mt-12 text-center">
                        <Link href="/reference" className="uppercase font-bold inline-block px-6 py-3 bg-white text-blue-600 border-3 border-blue-600 hover:text-white hover:bg-blue-700 transition">
                            Naše Práce
                        </Link>


                </div>
{/*                 <div className="my-16">

                    <GalleryClientHomepage  galleryItems={galleryItems} />
                    <div className="mt-8 text-center">
                        <Link href="/reference" className="uppercase font-bold rounded-lg inline-block px-6 py-3 bg-white text-blue-600 border-3 border-blue-600 hover:text-white hover:bg-blue-700 transition">
                            Více fotek
                        </Link>
                    </div>

                </div> */}
            </div>
        </section>
    );
}
