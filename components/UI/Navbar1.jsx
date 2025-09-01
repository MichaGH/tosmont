"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FacebookIcon, Instagram, ChevronDown } from "lucide-react";

const lineProps = {
  className: "block h-[3px] w-8 rounded bg-current origin-center absolute",
  transition: { duration: 0.3, ease: "easeInOut" },
};

// main links
const navLinks = [
  { name: "Úvod", href: "/" },
  { name: "O nás", href: "/o-nas" },
  {
    name: "Služby",
    href: "/sluzby1",
    dropdown: [
      { name: "CNC Soustrožení", href: "/sluzby1/cnc-soustrozeni" },
      { name: "Broušení", href: "/sluzby1/brouseni" },
      { name: "Navigace", href: "/sluzby1/zvareni" },
      { name: "Muze", href: "/sluzby1/zvareni" },
      { name: "Byt", href: "/sluzby1/zvareni" },
      { name: "I tady", href: "/sluzby1/zvareni" },
    ],
  },
  { name: "Reference", href: "/reference" },
  { name: "Strojní Výbava", href: "/strojni-vybava" },
  { name: "Kontakt", href: "/kontakt" },
];

const navHeight = {
  scrolled: 80,
  unscrolled: 120,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgColor = mobileOpen || scrolled ? "#ffffff" : "rgba(255,255,255,0)";
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        backgroundColor: navBgColor,
        height: scrolled ? navHeight.scrolled : navHeight.unscrolled,
      }}
      transition={{ duration: 0.3 }}
      className={`${
        scrolled ? "border-b-0" : "border-b-1 border-gray-200/15"
      } fixed top-0 left-0 w-full z-50`}
    >
      <div className="flex items-center justify-between h-full">
        {/* Left: Logo + Navigation */}
        <div className="px-6 md:px-2 lg:px-6 flex items-center space-x-4 lg:space-x-8 xl:space-x-20">
          <div className="text-4xl md:text-2xl lg:text-4xl font-bold text-blue-600 flex flex-col px-2 py-4 font-space-grotesk">
            <Link href="/">TOSMONT</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link
                        href={link.href}
                        className={`${
                          scrolled ? "text-black" : "text-white"
                        } uppercase font-space-grotesk text-sm lg:text-base font-medium transition`}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          scrolled ? "text-black" : "text-white"
                        } group-hover:rotate-180`}
                      />
                    </div>

                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-150 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />

                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden min-w-[160px]">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`${
                      scrolled ? "text-black" : "text-white"
                    } uppercase font-space-grotesk text-sm lg:text-base font-medium transition`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-150 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Contact / CTA (desktop) */}
        <div className="hidden md:flex items-center space-x-8 h-full font-space-grotesk">
          <div
            className={`${
              scrolled ? "text-black" : "text-white"
            } flex space-x-6 md:space-x-2 lg:space-x-6`}
          >
            <Link href="#">
            <FacebookIcon size={28} />
            </Link>
            <Link href="#">
            <Instagram size={28} />
            </Link>
          </div>
          <Link
            href="/kontakt"
            className={`${
              scrolled
                ? "text-black border-gray-800/20"
                : "text-white border-gray-200/12"
            } border-l hover:bg-blue-600 h-full justify-center items-center text-center px-4 hidden lg:flex lg:px-4 xl:px-16 uppercase font-medium transition duration-300`}
          >
            Poptávka
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center px-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={`relative w-12 h-12 px-3 flex flex-col items-center justify-center focus:outline-none ${
              scrolled || mobileOpen ? "text-black" : "text-white"
            }`}
          >
            <motion.span
              {...lineProps.transition}
              className={`${lineProps.className}`}
              animate={
                mobileOpen
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -10 }
              }
            />
            <motion.span
              {...lineProps.transition}
              className={`${lineProps.className}`}
              animate={mobileOpen ? { opacity: 0, y: 0 } : { opacity: 1 }}
            />
            <motion.span
              {...lineProps.transition}
              className={`${lineProps.className}`}
              animate={
                mobileOpen
                  ? { rotate: -45, y: 0 }
                  : { rotate: 0, y: 10 }
              }
            />
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
            className={`fixed left-0 top-[${
              scrolled ? navHeight.scrolled : navHeight.unscrolled
            }px] h-[calc(100%-80px)] bg-white shadow-lg z-40 flex flex-col p-6 w-3/4 max-w-xs`}
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(!mobileDropdownOpen)
                      }
                      className="py-3 text-lg text-gray-700 font-medium text-left flex justify-between items-center"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col pl-4"
                        >
                          {link.dropdown.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="py-2 text-gray-600 hover:text-blue-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-3 text-lg text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
