// components/about/Certificates.jsx
import Image from "next/image";

export default function Certificates({ items = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {items.map((c, i) => (
        <div key={i} className="flex items-center justify-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
          {/* Replace images with your cert scans. Use transparent PNG for best results. */}
          <div className="w-40 h-24 relative">
            <Image src={c.src} alt={c.alt || `Cert ${i+1}`} fill className="object-contain" priority={false}/>
          </div>
        </div>
      ))}
    </div>
  );
}
