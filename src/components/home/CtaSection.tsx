"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] p-8 sm:p-14 lg:p-20 bg-zinc-950 shadow-2xl">
          {/* Background Architectural Render */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/featured/villa-exterior-hero.jpg"
              alt="1 Dream Design Villa Architecture"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] via-[#0b0c0e]/90 to-[#0b0c0e]/60 z-0" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase">
                Now Scheduling 2026/2027 Commissions
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
              Ready to Commission Your <br />
              <span className="font-serif italic text-gold-gradient">
                Architectural Masterpiece?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-10 max-w-xl">
              Connect directly with our principal design directors. Whether you are envisioning a ground-up luxury residence or a haute-couture master interior overhaul, we bring photorealistic fidelity to life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Book Studio Consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/917827473377?text=Hello%201%20Dream%20Design%2C%20I%20would%20like%20to%20commission%20an%20architectural%20or%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full text-xs font-medium uppercase tracking-[0.16em] text-zinc-200 bg-white/[0.06] border border-white/[0.12] hover:border-amber-300 hover:text-white transition-all backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call / WhatsApp: 78274 73377</span>
              </a>
            </div>

            {/* Micro Coordinates */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-[11px] font-mono text-zinc-500">
              <span>NCR / NEW DELHI / GURUGRAM</span>
              <span>•</span>
              <span>TURNKEY ARCHITECTURE & INTERIORS</span>
              <span>•</span>
              <span>1:1 RENDER-TO-REALITY GUARANTEE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
