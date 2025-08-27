"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroButtonFilled({ text, href, className }) {
    return (
        <Link href="href">
            <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={`${className} cursor-pointer relative uppercase overflow-hidden transition duration-450`}
            >
                {/* background fill */}


                {/* text */}
                <span className="relative z-10">{text}</span>
            </motion.button>
        </Link>
    );
}
