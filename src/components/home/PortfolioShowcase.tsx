"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Phone, Eye } from "lucide-react";
import { projectsData, Project } from "@/data/projectsData";

const categories = [
  { id: "all", label: "All Works" },
  { id: "architecture", label: "Architecture" },
  { id: "residential", label: "Master Suites & Residential" },
  { id: "interior", label: "Creative & Living Spaces" },
  { id: "commercial", label: "Commercial" },
];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0e1014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
              {"// Curated Portfolio"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mt-2">
              Architectural Works & <span className="font-serif italic text-gold-gradient">Spatial Realizations</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light">
              Explore our portfolio of high-end private residences, bespoke master suites, and creative spaces. Each project is crafted with photorealistic 3D precision before physical realization.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs font-mono text-zinc-400">
              Showing {filteredProjects.length} Architectural Compositions
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md w-fit">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-xs uppercase font-medium tracking-[0.16em] transition-all duration-300 ${
                  isActive
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 rounded-xl -z-10 shadow-lg shadow-amber-400/20"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Bento Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#121418] border border-white/[0.08] hover:border-amber-300/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black/60 flex flex-col"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-amber-200 uppercase">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white group-hover:bg-amber-300 group-hover:text-zinc-950 transition-colors duration-300">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Bottom Meta on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-amber-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Inspection Modal / Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121418] border border-white/[0.12] shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-white text-zinc-300 hover:text-black transition-colors border border-white/10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Visual Area */}
              <div className="relative w-full lg:w-3/5 min-h-[360px] lg:min-h-full bg-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Modal Project Narrative & Inquire */}
              <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-amber-300 uppercase">
                    {selectedProject.categoryLabel} • {selectedProject.year}
                  </span>
                  <h3 className="text-2xl font-light text-white tracking-tight mt-1 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Architectural Specs List */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.08] mb-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500 font-mono uppercase">Location</span>
                      <span className="text-zinc-200 font-medium">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500 font-mono uppercase">Spatial Area</span>
                      <span className="text-zinc-200 font-medium">{selectedProject.area}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500 font-mono uppercase">Timeline</span>
                      <span className="text-zinc-200 font-medium">{selectedProject.duration}</span>
                    </div>
                  </div>

                  {/* Curated Materials */}
                  <div>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      Material Palette
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.materials.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[11px] px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-amber-200/90 font-mono"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action for this Project */}
                <div className="pt-6 mt-6 border-t border-white/[0.08]">
                  <a
                    href={`https://wa.me/917827473377?text=Hello%201%20Dream%20Design%2C%20I%20am%20interested%20in%20a%20concept%20similar%20to%20"${encodeURIComponent(
                      selectedProject.title
                    )}".`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl text-xs uppercase tracking-[0.18em] font-semibold text-zinc-950 bg-gradient-to-r from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-400/20"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire About This Space</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
