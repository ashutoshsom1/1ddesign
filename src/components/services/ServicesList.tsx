"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "architecture",
    title: "Bespoke Villa Architecture",
    category: "Architecture & Structural",
    description:
      "We design monolithic and cantilevered residences that maximize natural sunlight, micro-climates, and grand spatial volumes. Every structural element is engineered with timeless distinction.",
    image: "/images/featured/villa-exterior-hero.jpg",
    features: [
      "Cantilevered Balconies & Thermal Ash Louver Integration",
      "Biophilic Internal Courtyard & Sky Garden Zoning",
      "Full Structural, MEP & Municipal Sanction Documentation",
      "Custom Facade Lighting & Perimeter Automation",
    ],
  },
  {
    id: "interior-design",
    title: "Haute-Couture Master Suites & Living",
    category: "Interior Spatial Design",
    description:
      "Sculpted for luxury comfort. We hand-select exotic natural stones, bookmatched emerald onyx, brushed champagne brass accents, and bespoke acoustic wainscoting.",
    image: "/images/featured/master-suite-emerald-01.jpg",
    features: [
      "Natural Emerald Verde & Calacatta Stone Bookmatching",
      "Custom Fluted Acoustic Paneling & Concealed Joinery",
      "Architectural 3000K Warm LED Cove & Profile Illumination",
      "Bespoke Italian Leather & Suede Headboard Detailing",
    ],
  },
  {
    id: "3d-visualization",
    title: "Photorealistic 3D Spatial Simulation",
    category: "Visualization & Virtual Reality",
    description:
      "Eliminating ambiguity with hyper-realistic 4K render simulations. We replicate exact physical daylight temperatures, shadow casting, and real material reflectance.",
    image: "/images/featured/master-suite-emerald-02.jpg",
    features: [
      "Ultra-HD 4K Still Perspectives & Material Previews",
      "Interactive 360° Panoramic Spatial Walkthroughs",
      "Day-to-Night Ambient Luminaire Transition Studies",
      "Exact 1:1 Color & Texture Fidelity Calibration",
    ],
  },
  {
    id: "creative-spaces",
    title: "Thematic & Children Creative Suites",
    category: "Bespoke Residential Living",
    description:
      "Transforming children's and hobby zones into imaginative havens. Featuring illuminated celestial moon portals, hidden storage walls, and ergonomic homework pods.",
    image: "/images/featured/kids-bedroom-creative.jpg",
    features: [
      "Circular Halo Night Light Niches & Starry Ceilings",
      "Modular Study Alcoves with Concealed Wire Troughs",
      "Durable Polyurethane Finishes & Acoustic Wallcoverings",
      "Growth-Adaptive Ergonomic Furniture Systems",
    ],
  },
  {
    id: "turnkey-execution",
    title: "Turnkey White-Glove Handover",
    category: "Contracting & Site Realization",
    description:
      "Our firm assumes complete single-source responsibility. From civil demolition to final white-glove styling, our dedicated site engineers ensure spotless 1:1 delivery.",
    image: "/images/projects/project-14.jpg",
    features: [
      "Dedicated On-Site Architectural Project Director",
      "Zero-Variance Material Authentication Standards",
      "Milestone-Guaranteed Scheduling & Weekly Progress Reports",
      "Snag-Free White-Glove Key Handover",
    ],
  },
];

export default function ServicesList() {
  return (
    <div className="space-y-28">
      {services.map((service, index) => {
        const isReversed = index % 2 === 1;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              isReversed ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Visual Column */}
            <div
              className={`lg:col-span-6 relative ${
                isReversed ? "lg:col-start-7" : ""
              }`}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl bg-zinc-900 group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-amber-300 uppercase">
                  {service.category}
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div
              className={`lg:col-span-6 flex flex-col justify-center ${
                isReversed ? "lg:col-start-1" : ""
              }`}
            >
              <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
                {`// Service 0${index + 1}`}
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-1 mb-4">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Architectural deliverables */}
              <div className="space-y-2.5 mb-8">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-zinc-950 bg-amber-300 hover:bg-amber-200 px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-amber-300/10"
                >
                  <span>Commission This Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
