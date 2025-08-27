"use client";
import React from "react";
import { Mail, Smartphone } from "lucide-react";

const contactCards = [
    {
        name: "Martin Filsoch – Jednatel",
        email: "info@tosmont.cz",
        phone: "+420 723 747 784",
        color: "border-blue-500",
    },
    {
        name: "Vedoucí výroby – Poptávky/Objednávky",
        email: "vyroba@tosmont.cz",
        phone: "+420 722 990 402",
        color: "border-green-500",
    },
    {
        name: "Mistr – Dílna",
        email: "dilna@tosmont.cz",
        phone: "+420 702 246 912",
        color: "border-purple-500",
    },
    {
        name: "Ing. Petra Buďová – Fakturace",
        email: "fakturace@tosmont.cz",
        phone: "+420 722 990 359",
        color: "border-yellow-500",
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="w-full bg-gray-50 py-24 font-space-grotesk relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left: Company Info + Cards */}
                <div className="space-y-8">
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 uppercase">
                        Kontakt
                    </h2>

                    {/* Company Info */}
                    <div className="space-y-2 text-gray-700 text-sm md:text-base">
                        <div>
                            <p className="font-semibold">Sídlo společnosti:</p>
                            <p>Babory 809, 394 68 Žirovnice</p>
                            <p className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-blue-600" />
                                <span>info@tosmont.cz</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <Smartphone className="w-4 h-4 text-blue-600" />
                                <span>+420 722 990 402 (objednávky)</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <Smartphone className="w-4 h-4 text-blue-600" />
                                <span>+420 723 747 784 (servis)</span>
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">Provozovna:</p>
                            <p>Otín 424, 377 01 Jindřichův Hradec</p>
                        </div>
                    </div>

                    {/* Contact Cards */}
                    <div className="flex flex-col flex-wrap gap-4">
                        {contactCards.map((card) => (
                            <div
                                key={card.name}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-2 bg-white   border-l-4 ${card.color} p-4 min-w-[220px] hover:shadow-lg transition`}
                            >
                                <div>
                                    <p className="font-medium text-gray-800">{card.name}</p>
                                    <div className="grid grid-cols-2">

                                        <p className="flex items-center space-x-2 text-gray-600 text-sm">
                                            <Mail className="w-4 h-4 text-gray-400" />
                                            <span>{card.email}</span>
                                        </p>
                                        <p className="flex items-center space-x-2 text-gray-600 text-sm">
                                            <Smartphone className="w-4 h-4 text-gray-400" />
                                            <span>{card.phone}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="relative">
                    <div className="bg-white p-10 rounded-2xl shadow-xl">
                        <h3 className="text-3xl font-bold mb-6 text-gray-800">Napište nám</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Jméno</label>
                                <input
                                    type="text"
                                    placeholder="Vaše jméno"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Firma</label>
                                <input
                                    type="text"
                                    placeholder="Název firmy"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Váš email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Zpráva</label>
                                <textarea
                                    rows={5}
                                    placeholder="Vaše zpráva"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-700 transition"
                            >
                                Odeslat
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
