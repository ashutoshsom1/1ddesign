"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, ArrowUpRight, X } from "lucide-react";

export default function FloatingContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <AnimatePresence>
        {!minimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2.5 p-2 pr-4 rounded-full bg-[#121418]/90 backdrop-blur-xl border border-white/[0.12] shadow-2xl shadow-black/80 text-white"
          >
            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/917827473377?text=Hello%201%20Dream%20Design%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20or%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-md"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            {/* Direct Call */}
            <a
              href="tel:+917827473377"
              className="flex items-center space-x-1.5 px-3 py-2 rounded-full hover:bg-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              title="Direct Studio Line"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">78274 73377</span>
            </a>

            {/* Request Quote Button */}
            <Link
              href="/contact"
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-amber-300 hover:bg-amber-200 text-zinc-950 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMinimized(true)}
              className="p-1 rounded-full text-zinc-500 hover:text-white transition-colors ml-1"
              aria-label="Minimize consultation bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-open pill if minimized */}
      {minimized && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setMinimized(false)}
          className="flex items-center space-x-2 p-3 rounded-full bg-amber-300 text-zinc-950 shadow-2xl hover:scale-105 transition-all font-semibold text-xs tracking-wider"
          aria-label="Open quick connect"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Consult Studio</span>
        </motion.button>
      )}
    </div>
  );
}
