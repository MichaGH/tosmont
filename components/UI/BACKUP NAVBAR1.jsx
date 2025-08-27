"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "Úvod", href: "#" },
    { name: "O nás", href: "#" },
    { name: "Služby", href: "#" },
    { name: "Reference", href: "#" },
    { name: "Strojní Výbava", href: "#" },
    { name: "Kontakt", href: "#" },
];

const navHeight = {
    scrolled: 80,
    unscrolled: 120
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // force white if mobile menu is open
    const navBgColor =
        mobileOpen || scrolled ? "#ffffff" : "rgba(255,255,255,0)";

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{
                backgroundColor: navBgColor,
                height: scrolled ? navHeight.scrolled : navHeight.unscrolled,
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-50 border-b border-gray-200/15"
        >
            <div className="flex items-center justify-between h-full">
                {/* Left: Logo + Navigation */}
                <div className="px-6 flex items-center space-x-20">
                    <div className="text-4xl font-bold text-blue-600 flex flex-col px-2 py-4 font-space-grotesk">
                        <Link href="/">TOSMONT</Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${
                                    scrolled ? "text-black" : "text-white"
                                } uppercase font-space-grotesk hover:text-blue-600 font-medium transition`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right: Contact / CTA (desktop) */}
                <div className="hidden md:flex items-center space-x-6 h-full font-space-grotesk">
                    <Link
                        href="/kontakt"
                        className={`${
                            scrolled
                                ? "text-black border-gray-800/20"
                                : "text-white border-gray-200/12"
                        } border-l hover:bg-blue-600 h-full flex justify-center items-center text-center px-16 uppercase font-medium transition duration-300`}
                    >
                        Poptávka
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    mobileOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`top-[${scrolled ? navHeight.scrolled : navHeight.unscrolled}px] fixed left-0  h-[calc(100%-80px)] bg-white shadow-lg z-40 flex flex-col p-6`}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="py-3 text-lg text-gray-700 hover:text-blue-600 font-medium"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
