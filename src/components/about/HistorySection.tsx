import React from "react";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="py-24 bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
              {"// Studio Genesis"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-2 mb-6">
              Founded on the Pursuit of <span className="font-serif italic text-gold-gradient">Spatial Perfection</span>
            </h2>
            <div className="space-y-4 text-sm text-zinc-400 font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium">1 Dream Design Studio</strong> was established with a singular manifesto: to liberate architecture and interiors from generic conventions and disjointed contractor handoffs.
              </p>
              <p>
                What began as a specialized architectural visualization and spatial atelier has matured into a premier end-to-end design and turnkey contracting firm across Delhi NCR, Gurugram, and beyond.
              </p>
              <p>
                Every villa, duplex, and luxury suite we undertake is treated as a bespoke work of art. We deploy cutting-edge 3D GPU ray-tracing to sculpt sunlight, shadow gaps, and natural stone textures—ensuring client confidence before physical realization begins.
              </p>
            </div>
          </div>

          {/* Real Render Images Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
                <Image
                  src="/images/featured/villa-exterior-hero.jpg"
                  alt="1 Dream Design Villa Architecture"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
                <Image
                  src="/images/featured/master-suite-emerald-01.jpg"
                  alt="Emerald Master Suite"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
                <Image
                  src="/images/featured/master-suite-emerald-02.jpg"
                  alt="Media Console & Fluting"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/[0.1] shadow-xl">
                <Image
                  src="/images/featured/kids-bedroom-creative.jpg"
                  alt="Creative Children Sanctuary"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
