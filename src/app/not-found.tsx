"use client";

import Link from "next/link";
import Particles from "@/components/Particle";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Particle background */}
      <Particles />

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Animated 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-extrabold text-purple-500 drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mt-4"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <p className="mt-4 text-gray-300 leading-relaxed">
          The page you’re looking for might have been removed, is temporarily
          unavailable, or never existed. Let’s get you back on track!
        </p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition border-2 border-purple-500 hover:border-purple-400"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
