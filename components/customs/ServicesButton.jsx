"use client";

import { motion } from "framer-motion";

export default function ServicesButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative px-8 py-4 font-semibold border-3 border-blue-600 text-white uppercase overflow-hidden"
    >
      {/* background fill */}
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-blue-600 origin-left z-0"
      />

      {/* text */}
      <span className="relative z-10">Zjistit více</span>
    </motion.button>
  );
}
