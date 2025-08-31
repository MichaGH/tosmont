"use client";
import { useState } from "react";

const materials = [
  {
    name: "Hliník",
    image: "/images/materials/aluminium.jpg",
    content:
      "Hliník je lehký kov s vynikající korozní odolností. Používáme ho pro přesné součásti a konstrukce, kde je klíčová nízká hmotnost a stabilita.",
  },
  {
    name: "Ocel",
    image: "/images/materials/aluminium.jpg",
    content:
      "Ocel je základním materiálem pro většinu našich výrobků. Obrábíme ho přesně podle rozměrů zákazníka a garantujeme vysokou pevnost dílů.",
  },
  {
    name: "Titan",
    image: "/images/materials/aluminium.jpg",
    content:
      "Titan je extrémně pevný a lehký materiál. Obrábíme ho pro vysoce technické aplikace, kde je klíčová pevnost a odolnost.",
  },
  {
    name: "Měď",
    image: "/images/materials/aluminium.jpg",
    content:
      "Měď je měkký a dobře vodivý materiál, ideální pro elektro součásti a speciální konstrukce.",
  },
  {
    name: "Mosaz",
    image: "/images/materials/aluminium.jpg",
    content:
      "Mosaz je slitina mědi a zinku, vhodná pro ozubená kola, ventily a dekorativní komponenty.",
  },
];

export default function MaterialsTabs() {
  const [activeMaterial, setActiveMaterial] = useState(materials[0]);

  return (
    <div className="space-y-8 font-space-grotesk max-w-5xl mx-auto bg-dsev">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {materials.map((mat) => {
          const isActive = activeMaterial.name === mat.name;
          return (
            <button
              key={mat.name}
              onClick={() => setActiveMaterial(mat)}
              className={`
                px-5 py-3 border-b-2 transition-all font-medium
                ${isActive
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600"}
              `}
            >
              {mat.name}
            </button>
          );
        })}
      </div>

      {/* Active Material Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start min-h-[20rem]">
        <div className="flex justify-center items-center">
          <img
            src={activeMaterial.image}
            alt={activeMaterial.name}
            className="w-full rounded-xl shadow-lg object-cover h-80"
          />
        </div>
        <div className="text-gray-700 text-lg leading-relaxed flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {activeMaterial.name}
          </h3>
          <p>{activeMaterial.content}</p>
        </div>
      </div>
    </div>
  );
}
