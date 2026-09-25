import React from "react";
import { statistics } from "@/data/projectsData";

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#0e1014] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {statistics.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-4xl sm:text-5xl font-light font-serif text-amber-300 tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] font-medium text-white mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-zinc-500">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
