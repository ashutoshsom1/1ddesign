"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Phone, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-blueprint-grid">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center z-10"
          >
            {/* Studio Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-300">
                1 Dream Design Studio • Est. NCR
              </span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Bespoke Spaces. <br />
              <span className="font-serif italic font-normal text-gold-gradient">
                Photorealistic
              </span>{" "}
              Precision.
            </h1>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8 max-w-xl">
              We bridge architectural vision and physical reality. From grand multi-tier villas to bespoke emerald marble master suites, our turnkey studio engineers luxury spaces with 1:1 render-to-reality execution.
            </p>

            {/* CTAs & Direct Contact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 shadow-xl shadow-amber-500/15 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Initiate Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <a
                href="https://wa.me/917827473377?text=Hello%201%20Dream%20Design%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20and%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.16em] text-zinc-300 bg-white/[0.04] border border-white/[0.1] hover:border-amber-300/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>WhatsApp: 78274 73377</span>
              </a>
            </div>

            {/* Quick architectural spec metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
              <div>
                <p className="text-2xl font-light text-white tracking-tight">25+</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">Bespoke Spaces</p>
              </div>
              <div>
                <p className="text-2xl font-light text-amber-200 tracking-tight">1:1</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">Render Match</p>
              </div>
              <div>
                <p className="text-2xl font-light text-white tracking-tight">Turnkey</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">End-to-End</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Layered Architectural Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Main Visual Frame */}
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/80 group">
              <Image
                src="/images/featured/villa-exterior-hero.jpg"
                alt="Zenith Multi-Tier Architectural Villa by 1 Dream Design"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Top Architectural Drafting Coordinate Stamp */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/70 tracking-widest uppercase bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="flex items-center space-x-1.5">
                  <Compass className="w-3 h-3 text-amber-300" />
                  <span>28°27&apos; N, 77°04&apos; E</span>
                </span>
                <span>FIG. 01 / FEATURED ARCHITECTURE</span>
              </div>

              {/* Bottom Project Spec Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-[#0b0c0e]/85 backdrop-blur-md border border-white/[0.1]">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-amber-300 uppercase">
                      Bespoke Realization
                    </span>
                    <h3 className="text-lg font-medium text-white tracking-tight mt-0.5">
                      Zenith Contemporary Villa
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      Multi-tier cantilevered architecture with thermal ash louvers & interior courtyard.
                    </p>
                  </div>
                  <Link
                    href="/#comparisons"
                    className="p-2.5 rounded-full bg-white/[0.08] hover:bg-amber-300 hover:text-zinc-950 text-white transition-colors duration-200"
                    aria-label="View project details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Detail Spec Card - Emerald Marble Accent */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden sm:flex absolute -bottom-6 -left-6 max-w-xs p-3.5 rounded-xl bg-[#121418]/90 backdrop-blur-xl border border-white/[0.12] shadow-2xl items-center space-x-3.5"
            >
              <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <Image
                  src="/images/featured/master-suite-emerald-01.jpg"
                  alt="Emerald marble detail"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] font-medium text-white leading-snug">
                  Emerald Onyx Suite
                </p>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                  Natural stone & fluted wainscot
                </p>
                <span className="inline-block text-[9px] uppercase tracking-wider text-emerald-400 font-semibold mt-1">
                  100% Turnkey Handover
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
