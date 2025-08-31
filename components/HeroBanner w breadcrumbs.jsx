import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function HeroBanner({ title, breadcrumbs = [], bgImage }) {
  return (
    <div className="relative z-0 w-full h-[35vh] md:h-[45vh] flex flex-col justify-start text-center overflow-hidden font-space-grotesk">
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
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="mb-4 text-sm text-gray-300">
              <ol className="flex flex-wrap justify-center gap-1">
                {/* Always start with Home */}
                <li className="flex items-center gap-1">
                  <Link href="/" className="hover:text-white transition-colors">
                    <Home size={16} className="inline-block" />
                  </Link>
                  {breadcrumbs.length > 0 && (
                    <span className="text-gray-500">›</span>
                  )}
                </li>

                {breadcrumbs.map((bc, i) => (
                  <li key={i} className="flex items-center gap-1">
                    {i < breadcrumbs.length - 1 ? (
                      <Link
                        href={bc.href}
                        className="hover:text-white transition-colors"
                      >
                        {bc.label}
                      </Link>
                    ) : (
                      <span className="text-gray-400">{bc.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && (
                      <span className="text-gray-500">›</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          
        </div>
      </div>
    </div>
  );
}
