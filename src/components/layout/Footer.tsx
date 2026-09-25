"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#08090b] text-white pt-20 pb-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand Statement & Inquiry */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/[0.08] gap-8">
          <div>
            <Logo />
            <p className="text-sm text-zinc-400 max-w-md mt-4 font-light leading-relaxed">
              Bespoke architecture, photorealistic 3D spatial simulations, and turnkey interior design engineered for extraordinary living environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://wa.me/917827473377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-zinc-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow-lg shadow-amber-300/10"
            >
              <span>Instant WhatsApp Discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+917827473377"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.16em] text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>+91 78274 73377</span>
            </a>
          </div>
        </div>

        {/* Middle Tier: Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          
          {/* Studio Focus */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 mb-5">
              {"// Studio Focus"}
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="hover:text-white transition-colors">Bespoke Contemporary Villas</li>
              <li className="hover:text-white transition-colors">Emerald Marble Master Suites</li>
              <li className="hover:text-white transition-colors">Haute-Couture Kitchens</li>
              <li className="hover:text-white transition-colors">Creative Children Sanctuaries</li>
              <li className="hover:text-white transition-colors">Biophilic Terrace Architecture</li>
              <li className="hover:text-white transition-colors">4K Photorealistic Simulations</li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 mb-5">
              {"// Navigation"}
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Portfolio Works
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Studio Disciplines
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  4-Stage Methodology
                </Link>
              </li>
              <li>
                <Link href="/#comparisons" className="hover:text-white transition-colors">
                  Dual-View Precision
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Studio Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Commission Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 mb-5">
              {"// Studio Atelier & Headquarters"}
            </h4>
            <div className="space-y-4 text-xs text-zinc-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  KW SRISHTI-2, Raj Nagar Extension, Ghaziabad, Delhi NCR, Uttar Pradesh 201003
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a href="tel:+917827473377" className="hover:text-white transition-colors">
                  +91 78274 73377 / 078274 73377
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a href="mailto:1dreamdesignstudioo@gmail.com" className="hover:text-white transition-colors">
                  1dreamdesignstudioo@gmail.com
                </a>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/1d_studio/?igsh=cGptcWxsNmd2NDFi#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-zinc-300 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@1d_studio on Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Admin */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} 1 Dream Design Studio. All architectural rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Rendered with Photorealistic Fidelity</span>
            <Link href="/admin" className="hover:text-zinc-300 transition-colors">
              Studio Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
