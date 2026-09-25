import React from "react";
import ServicesList from "@/components/services/ServicesList";
import CtaSection from "@/components/home/CtaSection";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
      {/* Services Hero Header */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
              {"// Architectural Disciplines"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            Integrated Design & <br />
            <span className="font-serif italic text-gold-gradient">
              Turnkey Execution
            </span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            From ground-up contemporary villas to haute-couture master suites, explore our comprehensive disciplines built on 1:1 photorealistic fidelity.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesList />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
