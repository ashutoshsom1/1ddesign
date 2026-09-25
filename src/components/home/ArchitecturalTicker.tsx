"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Compass, Box, Layers, ShieldCheck, Ruler } from "lucide-react";

const tickerItems = [
  { icon: Compass, text: "Bespoke Villa Architecture" },
  { icon: Box, text: "Photorealistic 3D Renders" },
  { icon: Layers, text: "Emerald Marble & Fine Millwork" },
  { icon: Ruler, text: "Turnkey Interior Realization" },
  { icon: ShieldCheck, text: "Exact 1:1 Physical Delivery" },
  { icon: Sparkles, text: "Architectural Lighting Design" },
];

export default function ArchitecturalTicker() {
  return (
    <div className="relative w-full py-5 bg-[#0f1115] border-y border-white/[0.08] overflow-hidden">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0c0e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0c0e] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center space-x-12 shrink-0 pr-12"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-3.5">
                <span className="p-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-amber-300">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs uppercase font-medium tracking-[0.22em] text-zinc-300">
                  {item.text}
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
