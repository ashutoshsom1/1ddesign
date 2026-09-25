"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";

const navLinks = [
  { href: "/", label: "Portfolio" },
  { href: "/#services", label: "Expertise" },
  { href: "/#process", label: "Methodology" },
  { href: "/#comparisons", label: "Render Precision" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Inquire" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#0b0c0e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40"
            : "py-6 bg-gradient-to-b from-[#0b0c0e]/90 via-[#0b0c0e]/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Architectural Studio Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-xs uppercase font-medium tracking-[0.16em] transition-colors duration-200 rounded-full ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-white/[0.08] border border-amber-300/30 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Direct Connect & Consultation CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+917827473377"
                className="flex items-center space-x-2 text-xs tracking-wider text-zinc-300 hover:text-amber-200 transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.04]"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>+91 78274 73377</span>
              </a>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 shadow-md shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <a
                href="tel:+917827473377"
                className="p-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-amber-300"
                aria-label="Call studio"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0b0c0e]/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col space-y-5 pt-4">
              <span className="text-[11px] font-mono tracking-[0.25em] text-amber-300/80 uppercase">
                {"// Spatial Navigation"}
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-light text-zinc-200 hover:text-amber-200 tracking-wide transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/[0.08] flex flex-col space-y-4">
              <a
                href="tel:+917827473377"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-200"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span className="text-sm font-medium">+91 78274 73377</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-amber-300">Direct Line</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 text-center text-xs uppercase tracking-[0.2em] font-semibold text-zinc-950 bg-amber-300 rounded-xl shadow-lg shadow-amber-300/20"
              >
                Request Architectural Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
