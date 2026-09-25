"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappActionUrl, setWhatsappActionUrl] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setWhatsappActionUrl(null);

    const submissionPayload = {
      ...formData,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionPayload),
      });

      if (response.ok) {
        const resData = await response.json();
        
        // Use server-generated WhatsApp URL or generate client-side link
        const fallbackUrl = `https://wa.me/917827473377?text=${encodeURIComponent(
          `🏛️ *NEW ARCHITECTURAL CONSULTATION BOOKING*\n*1 Dream Design Atelier*\n━━━━━━━━━━━━━━━━━━━━━━━━\n👤 *Client:* ${formData.name}\n📞 *Phone:* ${formData.phone || 'Not provided'}\n✉️ *Email:* ${formData.email}\n📐 *Typology:* ${formData.service}\n📝 *Brief:* "${formData.message}"`
        )}`;

        setWhatsappActionUrl(resData.whatsapp?.whatsappUrl || fallbackUrl);
        setSubmitStatus({
          success: true,
          message: "Consultation brief received by 1 Dream Design Studio atelier. Our Principal Architect has been alerted.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        const error = await response.text();
        throw new Error(error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "There was an error submitting your message. Please reach out to us directly via WhatsApp (+91 78274 73377).",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-[#121418] border border-white/[0.1] shadow-2xl space-y-6"
    >
      <div className="border-b border-white/[0.08] pb-6">
        <span className="text-[10px] font-mono tracking-[0.25em] text-amber-300 uppercase">
          {"// Architectural Commission"}
        </span>
        <h3 className="text-2xl font-light text-white tracking-tight mt-1">
          Initiate Spatial Consultation
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          Fill out the brief below or contact our atelier directly via WhatsApp.
        </p>
      </div>

      {submitStatus && (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-xl text-xs flex items-start space-x-3 ${
              submitStatus.success
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                : "bg-red-500/10 border border-red-500/30 text-red-300"
            }`}
          >
            {submitStatus.success ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            )}
            <span>{submitStatus.message}</span>
          </div>

          {submitStatus.success && whatsappActionUrl && (
            <div className="p-5 rounded-2xl bg-[#0b1410] border border-emerald-500/30 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-300 text-xs font-mono uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{"// Real-Time WhatsApp Dispatch"}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                For immediate priority booking with our Principal Architect, click below to forward your consultation brief directly to our official studio WhatsApp:
              </p>
              <a
                href={whatsappActionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 w-full py-3.5 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp (+91 78274 73377)</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
          Your Name / Representative
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g. Vikram Singhania"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-300 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="vikram@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-300 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-300 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
          Project Scope / Typology
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-[#16181d] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-300 transition-colors"
        >
          <option value="">Select Spatial Scope</option>
          <option value="luxury-villa-architecture">Bespoke Architectural Villa (Ground-Up)</option>
          <option value="master-suite-interior">Haute-Couture Master Suite & Living</option>
          <option value="complete-turnkey-residence">Complete Turnkey Luxury Residence</option>
          <option value="3d-rendering-simulation">4K Photorealistic 3D Renders & VR</option>
          <option value="commercial-office-retail">Commercial Studio / Retail Space</option>
          <option value="landscape-penthouse">Terrace Pavilion & Landscape</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
          Spatial Brief & Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          placeholder="Describe your site location, approximate square footage, timeline, and aesthetic preferences..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-300 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-amber-400/15 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        <Send className="w-3.5 h-3.5" />
        <span>{isSubmitting ? "Transmitting Proposal..." : "Submit Architectural Brief"}</span>
      </button>

      <div className="pt-4 text-center">
        <span className="text-[11px] text-zinc-500 font-mono">
          Prefer instant discussion?{" "}
          <a
            href="https://wa.me/917827473377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:underline"
          >
            Chat directly on WhatsApp (+91 78274 73377)
          </a>
        </span>
      </div>
    </form>
  );
}
