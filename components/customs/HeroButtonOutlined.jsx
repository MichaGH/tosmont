"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroButtonOutlined({ text, href, className }) {
  return (
    <Link href={href} className="">
      <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`${className} relative  uppercase overflow-hidden cursor-pointer`}
      >
        {/* Background fill from center */}
        <motion.span
          variants={{
            rest: { scaleY: 0 },
            hover: { scaleY: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-blue-600  origin-center z-0"
        />

        {/* Text */}
        <span className="relative z-10">{text}</span>
      </motion.button>
    </Link>
  );
}
