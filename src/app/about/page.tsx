import React from "react";
import HistorySection from "@/components/about/HistorySection";
import ValuesSection from "@/components/about/ValuesSection";
import StatsSection from "@/components/about/StatsSection";
import CtaSection from "@/components/home/CtaSection";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
      {/* Studio Header */}
      <section className="pt-28 pb-16 bg-blueprint-grid relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
              {"// Studio Atelier"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            About 1 Dream Design <br />
            <span className="font-serif italic text-gold-gradient">
              Studio & Atelier
            </span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            A boutique architectural and turnkey interior firm delivering haute-couture residences across Delhi NCR, Gurugram, and beyond.
          </p>
        </div>
      </section>

      {/* History & Studio Genesis */}
      <HistorySection />

      {/* Numerical Metrics */}
      <StatsSection />

      {/* Studio Values & Core Tenets */}
      <ValuesSection />

      {/* Commission CTA */}
      <CtaSection />
    </main>
  );
}
