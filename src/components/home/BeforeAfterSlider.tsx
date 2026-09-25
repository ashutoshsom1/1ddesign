"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SlidersHorizontal, Eye } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percentage = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="comparisons" className="py-24 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
              {"// Precision Engineering"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2">
              Concept to Physical <span className="font-serif italic text-gold-gradient">Execution</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light">
              Experience the dual perspectives of our master spatial compositions. Drag the slider to compare primary spatial angles and witness how light, emerald marble, and fluted joinery seamlessly harmonize.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3 text-xs font-mono text-zinc-400">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Interactive Dual-View Slider</span>
            </span>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-zinc-950 select-none">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[480px] sm:h-[600px] lg:h-[680px] w-full cursor-ew-resize overflow-hidden"
          >
            {/* Background Layer: Master Suite Perspective A (Emerald Bed Wall) */}
            <div className="absolute inset-0">
              <Image
                src="/images/featured/master-suite-emerald-01.jpg"
                alt="Master Suite Emerald Wall Composition"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-white uppercase flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Angle 01: Emerald Marble Feature Wall</span>
              </div>
            </div>

            {/* Foreground Clipped Layer: Master Suite Perspective B (Media Wall & Console) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/featured/master-suite-emerald-02.jpg"
                alt="Master Suite Media Console Wall"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-amber-200 uppercase flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Angle 02: Fluted Media Wall & Console</span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.6)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border-2 border-amber-300 text-amber-300 flex items-center justify-center shadow-xl">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Drag Hint on Bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 tracking-widest uppercase pointer-events-none">
              ◀ Drag or Touch to Reveal Angles ▶
            </div>
          </div>

          {/* Project Specification Highlights Below Slider */}
          <div className="p-6 sm:p-8 bg-[#121418] border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">Project Space</p>
              <p className="text-base font-medium text-white mt-1">Emerald Sanctuary Master Suite</p>
            </div>
            <div>
              <p className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">Primary Material</p>
              <p className="text-base font-medium text-emerald-400 mt-1">Natural Emerald Verde Marble</p>
            </div>
            <div>
              <p className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">Lighting Schema</p>
              <p className="text-base font-medium text-white mt-1">3000K Warm Indirect Cove & Profile</p>
            </div>
            <div>
              <p className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">Turnkey Execution</p>
              <p className="text-base font-medium text-amber-300 mt-1">1:1 Exact Reality Match</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
