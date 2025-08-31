"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesSideMenu({ items }) {
  const pathname = usePathname();

  return (
    <aside className="top-28 w-full md:w-64 font-space-grotesk">
      <nav className="bg-white  border-r border-gray-200 overflow-hidden">
        <ul className="flex flex-col">
          {items.map((service) => {
            const isActive = pathname === service.href;

            return (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className={`group flex items-center px-6 py-4 transition-colors duration-200 relative
                    ${isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                  `}
                >
                  {/* Left accent bar */}
                  <span
                    className={`absolute left-0 top-0 h-full w-1 rounded-r
                      ${isActive ? "bg-blue-600" : "bg-transparent group-hover:bg-blue-300"}
                      transition-all duration-200
                    `}
                  ></span>

                  <span className="ml-2 tracking-wide uppercase">{service.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
