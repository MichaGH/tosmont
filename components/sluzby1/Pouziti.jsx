"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

export default function Pouziti({ items }) {
  return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

  );
}
