import React from "react";
import { Sparkles, ShieldCheck, Layers, Award } from "lucide-react";

const values = [
  {
    id: "fidelity",
    title: "1:1 Render Fidelity",
    description:
      "We bridge digital visualization with physical execution. What is approved in our 4K photorealistic 3D model is built with millimeter precision.",
    icon: Sparkles,
  },
  {
    id: "materiality",
    title: "Honest Materiality",
    description:
      "From authentic bookmatched emerald marble to thermal ash louvers, we prioritize genuine textures that age with grace and distinction.",
    icon: Layers,
  },
  {
    id: "integrity",
    title: "Turnkey Accountability",
    description:
      "Single-source responsibility from concept to white-glove handover. No contractor finger-pointing, no unexpected budget surprises.",
    icon: ShieldCheck,
  },
  {
    id: "mastery",
    title: "Architectural Excellence",
    description:
      "Every joint, shadow gap, cove light angle, and bespoke cabinet is scrutinized to deliver spaces worthy of architectural recognition.",
    icon: Award,
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300 uppercase">
            {"// Studio Tenets"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-2">
            The Principles That <span className="font-serif italic text-gold-gradient">Govern Our Craft</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-4 font-light">
            Guiding our studio from the first pencil trace to the final ceremonial key delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="p-8 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-amber-300/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-amber-300 w-fit mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
