"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryModal({ src, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // clicking backdrop closes
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={onClose}
          >
            <X size={32} />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 text-white hover:text-gray-300 z-50"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Animated image */}
          <motion.img
            key={src} // important for animation when switching
            src={src}
            alt="Gallery full"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg z-40"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />

          {/* Next button */}
          <button
            className="absolute right-4 text-white hover:text-gray-300 z-50"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
