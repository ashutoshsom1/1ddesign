"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { testimonials, statistics } from "@/data/projectsData";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Firm Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#121418] border border-white/[0.08] shadow-2xl mb-24">
          {statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-amber-300 font-serif tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.16em] font-medium text-white mt-2">
                {stat.label}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 mt-1">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
            {"// Client Testimonials"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2">
            Endorsements of <span className="font-serif italic text-gold-gradient">Mastery</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light leading-relaxed">
            Discover what homeowners and developers say about partnering with 1 Dream Design Studio for turnkey architectural execution.
          </p>
        </div>

        {/* Testimonial Motion Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#121418] border border-white/[0.1] shadow-2xl">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center space-x-1 text-amber-300 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-lg sm:text-2xl font-light text-zinc-200 leading-relaxed font-serif italic mb-8">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/[0.08] gap-4">
                  <div>
                    <h4 className="text-base font-medium text-white">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-xs font-mono text-amber-300/90 mt-0.5">
                      {testimonials[activeIndex].project}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/[0.06] w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Turnkey Handover</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    i === activeIndex ? "w-8 bg-amber-300" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#121418] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#121418] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
