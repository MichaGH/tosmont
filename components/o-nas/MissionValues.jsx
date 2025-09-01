// components/about/MissionValues.jsx
import React from "react";

export default function MissionValues({ values = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 bg-devs divide-x divide-blue-300">
      {values.map((v, i) => (
        <div key={i} className="p-6  ">
          <div className="text-lg font-semibold uppercase tracking-wide text-blue-600 mb-3">{v.title}</div>
          <div className="text-gray-700">{v.text}</div>
        </div>
      ))}
    </div>
  );
}
