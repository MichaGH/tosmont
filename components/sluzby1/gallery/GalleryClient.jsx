"use client";

import { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

export default function GalleryClient({ galleryItems }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="w-full">
      {/* Grid of thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryItems.map((src, i) => (
          <GalleryCard key={i} src={src} onClick={() => setSelectedIndex(i)} />
        ))}
      </div>

      {/* Modal viewer */}
      {selectedIndex !== null && (
        <GalleryModal
          src={galleryItems[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((prev) =>
              prev > 0 ? prev - 1 : galleryItems.length - 1
            )
          }
          onNext={() =>
            setSelectedIndex((prev) =>
              prev < galleryItems.length - 1 ? prev + 1 : 0
            )
          }
        />
      )}
    </div>
  );
}
