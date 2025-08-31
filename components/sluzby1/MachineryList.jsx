"use client";
import React from "react";
import { Wrench } from "lucide-react";

export default function MachineryList({ machinery }) {
  return (
        <div className="flex flex-col gap-10">
          {machinery.map((machine, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white  overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="md:w-1/3 w-full">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Wrench className="text-blue-600 w-6 h-6" />
                  {machine.name}
                </h3>

                {/* Specs */}
                <ul className="mb-4 space-y-2">
                  {machine.specs.map((spec, j) => (
                    <li
                      key={j}
                      className="text-gray-700 border-l-4 border-blue-600 pl-3"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Comment */}
                <p className="text-gray-600 leading-relaxed">
                  {machine.comment}
                </p>
              </div>
            </div>
          ))}
    </div>

  );
}
