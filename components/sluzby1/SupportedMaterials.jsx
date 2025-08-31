import { Layers, Package } from "lucide-react";

export default function SupportedMaterials({ materials }) {
  return (
    <div className="w-full flex gap-4 border-y border-gray-200 justify-center">
      {materials.map((material, i) => (
        <div
          key={i}
          className="flex-1 py-4 flex flex-col items-center justify-center
                      text-blue-600 font-semibold uppercase
                     "
        >
          <Layers className="w-6 h-6 mb-2" />
          <span>{material}</span>
        </div>
      ))}
    </div>
  );
}
