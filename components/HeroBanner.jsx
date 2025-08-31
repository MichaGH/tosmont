import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function HeroBanner({ title, breadcrumbs = [], bgImage }) {
  return (
    <div className="relative z-0 w-full h-[30vh] md:h-[40vh] flex flex-col justify-start text-center overflow-hidden font-space-grotesk">
      {/* Background with slow CSS zoom */}
      {bgImage && (
        <div className="absolute inset-0 w-full h-full animate-slow-zoom">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative w-full h-full mt-[120px] flex flex-col items-center justify-center px-4">
        <div className="relative z-10 max-w-3xl flex flex-col space-y-8">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {title}
          </h1>


          
        </div>
      </div>
    </div>
  );
}
