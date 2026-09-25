import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Sparkles, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-28 bg-[#0b0c0e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
              {"// Studio Atelier Connect"}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            Commission Your <br />
            <span className="font-serif italic text-gold-gradient">Spatial Vision</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 font-light leading-relaxed">
            Reach out to discuss your architectural villa, turnkey residence, or bespoke interior environment. Direct dialogue with our principal design directors.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-3xl overflow-hidden border border-white/[0.08] bg-[#121418] p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="text-lg font-medium text-white">Find Our Atelier</h3>
              <p className="text-xs text-zinc-400 font-mono">Raj Nagar Extension, Ghaziabad, Delhi NCR</p>
            </div>
          </div>
          <div className="h-96 rounded-2xl overflow-hidden border border-white/[0.06] grayscale contrast-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8876151865396!2d77.42972850000001!3d28.7017128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf13957cd5395%3A0x8553b63632c0324f!2sKW%20SRISHTI-2%2C%20Raj%20Nagar%20Extension%2C%20Ghaziabad%2C%20Delhi%2C%20Uttar%20Pradesh%20201003!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
