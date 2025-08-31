import { Package } from "lucide-react";

export default function SupportedMaterials({ materials }) {
  return (
    <section className="w-full py-8">
      <h3 className="text-2xl font-bold text-center mb-6">
        Podporované materiály
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {materials.map((material, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon (default package, can later customize per material) */}
            <Package className="w-8 h-8 text-blue-600 mb-3" strokeWidth={1.5} />

            {/* Material Name */}
            <span className="text-gray-800 font-medium">{material}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
