"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Building2, Sparkles, Box, Hammer, ArrowUpRight, Compass, Shield } from "lucide-react";

const services = [
  {
    id: "architecture",
    title: "Bespoke Villa Architecture",
    subtitle: "Turnkey Residential & Structural Design",
    description:
      "Sculptural facades, cantilevered profiles, bioclimatic orientation, and master structural engineering for luxury private residences.",
    icon: Building2,
    image: "/images/featured/villa-exterior-hero.jpg",
    features: ["Bioclimatic Facades", "Structural Engineering", "Thermal Timber Louvers"],
  },
  {
    id: "interior-master",
    title: "Luxury Interior Spatial Design",
    subtitle: "Emerald Marble & Fine Millwork",
    description:
      "Curating bespoke master suites, dramatic living zones, and custom-crafted kitchens with bookmatched marble and concealed profile illumination.",
    icon: Sparkles,
    image: "/images/featured/master-suite-emerald-01.jpg",
    features: ["Bookmatched Marbles", "Acoustic Fluting", "Shadow-Gap Detailing"],
  },
  {
    id: "3d-visualization",
    title: "Photorealistic 3D Visualization",
    subtitle: "Ultra-HD Virtual Simulations",
    description:
      "State-of-the-art GPU rendering simulating exact sunlight angles, material reflectance, and spatial ambiance with 1:1 physical match.",
    icon: Box,
    image: "/images/featured/master-suite-emerald-02.jpg",
    features: ["4K Resolution Renders", "Day & Night Ambiance", "Virtual Reality Walkthroughs"],
  },
  {
    id: "creative-spaces",
    title: "Creative Living & Children Suites",
    subtitle: "Bespoke Thematic Spatial Concepts",
    description:
      "Playful yet sophisticated environments integrating ambient illuminated moon portals, ergonomic homework pods, and seamless storage.",
    icon: Compass,
    image: "/images/featured/kids-bedroom-creative.jpg",
    features: ["Halo Night Illumination", "Acoustic Wall Paneling", "Ergonomic Study Pods"],
  },
  {
    id: "turnkey-execution",
    title: "Turnkey White-Glove Execution",
    subtitle: "End-to-End Site Realization",
    description:
      "Single-point accountability from foundation to styling. We manage all procurement, master artisans, and quality audits with zero compromise.",
    icon: Hammer,
    image: "/images/projects/project-14.jpg",
    features: ["Dedicated Site Director", "Material Authentication", "100% On-Time Handover"],
  },
  {
    id: "landscape-wellness",
    title: "Terrace Architecture & Landscape",
    subtitle: "Biophilic Outdoor Pavilions",
    description:
      "Harmonizing architecture with nature. Operable pergolas, outdoor dining bars, sunken fire lounges, and architectural landscape lighting.",
    icon: Shield,
    image: "/images/projects/project-20.jpg",
    features: ["All-Weather Pergolas", "Architectural Water Features", "Sunken Lounges"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
              {"// Studio Disciplines"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2">
              Comprehensive Architectural <span className="font-serif italic text-gold-gradient">& Interior Scope</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light leading-relaxed">
              We provide unified end-to-end design intelligence, ensuring your sanctuary is conceived with aesthetic mastery and delivered with uncompromising precision.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-semibold text-amber-300 hover:text-white transition-colors"
            >
              <span>Consult On Your Space</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-[#121418] border border-white/[0.08] hover:border-amber-300/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Top Render Visual Preview */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-black/40 to-transparent" />
                    
                    {/* Icon floating badge */}
                    <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-amber-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-mono tracking-wider text-amber-300/90 uppercase">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-medium text-white tracking-tight mt-1 mb-3 group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-zinc-300">
                          <span className="w-1 h-1 rounded-full bg-amber-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0 mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-zinc-300 group-hover:text-amber-300 transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
