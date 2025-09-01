"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "lucide-react"; // using List icon instead of hamburger

export default function ServicesSideMenu({ items }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <aside className="font-space-grotesk ">
      {/* Mobile/Tablet Trigger (<= md) */}
      <div className="lg:hidden px-4 py-2 ">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-blue-600 border border-blue-600 px-3 py-1 rounded-md text-sm"
        >
          <List className="w-4 h-4" />
          <span>Služby</span>
        </button>
      </div>

      {/* Slide-out menu for mobile+tablet */}
      {open && (
        <div className="fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-200 shadow-lg z-50 lg:hidden">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <span className="font-semibold">Služby</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <nav className="overflow-y-auto">
            <ul className="flex flex-col">
              {items.map((service) => {
                const isActive = pathname === service.href;
                return (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      onClick={() => setOpen(false)} // auto-close after click
                      className={`group flex items-center px-6 py-3 transition-colors duration-200 relative
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        }`}
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-1 rounded-r
                          ${
                            isActive
                              ? "bg-blue-600"
                              : "bg-transparent group-hover:bg-blue-300"
                          }
                          transition-all duration-200
                        `}
                      ></span>
                      <span className="ml-2 tracking-wide uppercase">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar (lg+) */}
      <div className="hidden lg:block lg:w-56">
        <nav className="bg-white border-r border-gray-200 overflow-hidden">
          <ul className="flex flex-col">
            {items.map((service) => {
              const isActive = pathname === service.href;
              return (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className={`group flex items-center px-6 py-4 transition-colors duration-200 relative
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-1 rounded-r
                        ${
                          isActive
                            ? "bg-blue-600"
                            : "bg-transparent group-hover:bg-blue-300"
                        }
                        transition-all duration-200
                      `}
                    ></span>
                    <span className="ml-2 tracking-wide uppercase">
                      {service.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
