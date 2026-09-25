"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0e1014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Dual Architectural Image Layering */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl">
              <Image
                src="/images/featured/master-suite-emerald-01.jpg"
                alt="1 Dream Design Master Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-8 -right-6 sm:-right-8 w-3/5 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#121418] shadow-2xl hidden sm:block"
            >
              <Image
                src="/images/featured/kids-bedroom-creative.jpg"
                alt="1 Dream Design Creative Living Suite"
                fill
                sizes="350px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-zinc-300 uppercase tracking-widest flex items-center justify-between">
                <span>CREATIVE LIVING SUITE</span>
                <span className="text-amber-300">1:1 MATCH</span>
              </div>
            </motion.div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 p-4 rounded-xl bg-[#121418]/90 backdrop-blur-xl border border-white/[0.12] shadow-2xl">
              <p className="text-3xl font-light text-amber-300 tracking-tight font-serif">25+</p>
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mt-0.5">
                Bespoke Residencies Built
              </p>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
              {"// Studio Philosophy"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2 leading-[1.15]">
              Architecture Conceived with Soul, <span className="font-serif italic text-gold-gradient">Built with Exactitude</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 mt-6 font-light leading-relaxed">
              At <strong className="text-zinc-200 font-medium">1 Dream Design Studio</strong>, we reject standard templates. We believe an exceptional home or commercial environment is an intimate portrait of those who inhabit it.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light leading-relaxed">
              Our studio combines structural architectural engineering with haute-couture interior craftsmanship. By pairing 4K photorealistic spatial simulations with seasoned site artisans, we eradicate the gap between what you see in design and what you touch in reality.
            </p>

            {/* Core Differentiator Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/[0.08]">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-amber-300 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">1:1 Render Fidelity</h4>
                  <p className="text-xs text-zinc-400 mt-1">Exact materials, lighting angles, and dimensions physically replicated.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-amber-300 shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Bespoke Millwork</h4>
                  <p className="text-xs text-zinc-400 mt-1">Tailored fluted paneling, emerald marble veining, and concealed profiles.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-amber-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Zero-Delay Turnkey</h4>
                  <p className="text-xs text-zinc-400 mt-1">Strict timeline milestones with white-glove snag-free handover.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-amber-300 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Direct Principal Care</h4>
                  <p className="text-xs text-zinc-400 mt-1">Personal architectural supervision from concept kickoff to key delivery.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-10 flex items-center space-x-6">
              <Link
                href="/about"
                className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-zinc-950 bg-amber-300 hover:bg-amber-200 px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-amber-300/10"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
