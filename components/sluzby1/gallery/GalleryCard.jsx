"use client";
import { motion } from "framer-motion";

export default function GalleryCard({ src, onClick }) {
  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-md border border-gray-200"
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <img
        src={src}
        alt="Gallery thumbnail"
        className="w-full h-40 object-cover"
      />
    </motion.div>
  );
}
