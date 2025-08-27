'use client'

import Image from "next/image"

const images = [
  "/images/references/1.jpg",
  "/images/references/2.jpg",
  "/images/references/3.webp",
  "/images/references/4.webp",
  "/images/references/5.jpg",
  "/images/references/6.webp",
  "/images/references/10.webp",
]

export default function HexGallery() {
  return (
    <div className="hex-gallery">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`reference ${i + 1}`}
          width={300}
          height={300}
        />
      ))}
    </div>
  )
}
