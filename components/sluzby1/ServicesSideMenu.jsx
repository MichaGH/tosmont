"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "lucide-react";

export default function ServicesSideMenu({ items }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <aside className="font-space-grotesk  bg-deev">
            {/* Mobile + Tablet (sm–md) → Floating button + Bottom drawer */}
            <div className="lg:hidden">
                {/* Floating Action Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition"
                >
                    <List className="w-6 h-6" />
                </button>

                {/* Bottom Drawer */}
                {open && (
                    <div className="fixed inset-0 z-50 flex items-end">
                        {/* Semi-transparent background */}
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setOpen(false)}
                        ></div>

                        {/* Drawer itself */}
                        <div className="relative w-full bg-white rounded-t-2xl shadow-lg">
                            <div className="flex justify-between items-center px-4 py-3 border-b">
                                <span className="font-semibold text-lg">Služby</span>
                                <button onClick={() => setOpen(false)}>
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                            <nav className="max-h-[60vh] overflow-y-auto">
                                <ul className="flex flex-col">
                                    {items.map((service) => {
                                        const isActive = pathname === service.href;
                                        return (
                                            <li key={service.href}>
                                                <Link
                                                    href={service.href}
                                                    onClick={() => setOpen(false)}
                                                    className={`block px-6 py-4 ${isActive
                                                            ? "bg-blue-50 text-blue-600 font-semibold"
                                                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                                        }`}
                                                >
                                                    {service.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop (lg+) → Vertical sidebar */}
            <div className="hidden lg:block w-56 h-full">
                <nav className="bg-white border-r border-gray-200 h-full sticky top-20">
                    <ul className="flex flex-col">
                        <li className="block px-6 py-4 opacity-0">{" ."}</li>
                        {items.map((service) => {
                            const isActive = pathname === service.href;
                            return (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className={`block px-6 py-4 ${isActive
                                                ? "bg-blue-50 text-blue-600 font-semibold"
                                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                            }`}
                                    >
                                        {service.title}
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
