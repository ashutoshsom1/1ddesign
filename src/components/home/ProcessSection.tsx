"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Box, FileCode, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Spatial Programming & Concept Brief",
    subtitle: "Discovery, Lifestyle Mapping & Zoning",
    icon: Compass,
    image: "/images/featured/villa-exterior-hero.jpg",
    description:
      "Every project begins with a comprehensive dialogue. We analyze your lifestyle patterns, daylight orientation, structural potentials, and zoning boundaries to establish an uncompromised architectural vision.",
    deliverables: ["Site Analysis & Feasibility", "Circulation & Zoning Schematics", "Moodboard & Spatial Direction"],
  },
  {
    number: "02",
    title: "Photorealistic 3D Visualization",
    subtitle: "High-Fidelity Virtual Reality & Renders",
    icon: Box,
    image: "/images/featured/master-suite-emerald-01.jpg",
    description:
      "Before a single brick is laid, we simulate your future home in exacting detail. Using cutting-edge GPU rendering, we accurately model lighting dynamics, natural stone veining, custom joinery, and texture reflectance.",
    deliverables: ["Full 4K Photorealistic Renders", "Day & Night Ambient Scenarios", "360° VR Spatial Walkthroughs"],
  },
  {
    number: "03",
    title: "Architectural Blueprints & Curation",
    subtitle: "Structural Engineering & MEP Specifications",
    icon: FileCode,
    image: "/images/featured/master-suite-emerald-02.jpg",
    description:
      "Our technical team converts the approved design into millimetric execution blueprints. We select physical Italian marbles, custom fluted timbers, architectural recessed profiles, and sanitary fixtures.",
    deliverables: ["Detailed Electrical & Plumbing Plans", "Bespoke Millwork Working Drawings", "Physical Material Curation Samples"],
  },
  {
    number: "04",
    title: "Turnkey Execution & White-Glove Handover",
    subtitle: "1:1 Physical Delivery with Precision",
    icon: CheckCircle2,
    image: "/images/featured/kids-bedroom-creative.jpg",
    description:
      "We supervise every centimeter on-site. Our master craftsmen and site engineers bring the virtual model to reality with 100% fidelity, delivering a completed, spotless sanctuary on schedule.",
    deliverables: ["Dedicated Project Director Supervision", "Milestone Quality Audits", "Turnkey Snag-Free White Glove Handover"],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-[#0b0c0e] relative overflow-hidden">
      {/* Background blueprint subtle accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
            {"// Methodology"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2">
            The Architectural <span className="font-serif italic text-gold-gradient">Blueprint</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light leading-relaxed">
            Our systematic 4-phase methodology guarantees that what you approve in photorealistic 3D is precisely what you walk into upon physical completion.
          </p>
        </div>

        {/* Process Interactive Stage Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-[#16181d] border-amber-300/40 shadow-xl"
                      : "bg-[#101216]/50 border-white/[0.05] hover:bg-[#121418] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`text-lg font-mono font-light ${
                        isActive ? "text-amber-300 font-medium" : "text-zinc-500"
                      }`}
                    >
                      {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-amber-300 shrink-0" />
                    <div className="flex-1">
                      <h4
                        className={`text-base font-medium tracking-tight ${
                          isActive ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-0.5">{step.subtitle}</p>
                    </div>
                    {isActive && (
                      <span className="p-1 rounded-full bg-amber-300/10 text-amber-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage Detail Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-[#121418] border border-white/[0.1] overflow-hidden shadow-2xl"
              >
                {/* Visual Preview of the Stage */}
                <div className="relative aspect-[16/9] w-full bg-zinc-900">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-amber-300">
                    STAGE {steps[activeStep].number} IN DEPTH
                  </div>
                </div>

                {/* Content & Deliverables Breakdown */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm text-zinc-300 mt-3 font-light leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <h5 className="text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-3">
                      Key Stage Deliverables
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {steps[activeStep].deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
