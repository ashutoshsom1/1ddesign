import { MapPin, Mail, Phone, Clock, Compass, CheckCircle2 } from "lucide-react";

const serviceAreas = ["Delhi NCR", "Gurugram", "Noida", "Lucknow", "Prayagraj", "Chandigarh"];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Studio Location Card */}
      <div className="p-6 rounded-2xl bg-[#121418] border border-white/[0.08]">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 rounded-lg bg-amber-300/10 text-amber-300">
            <MapPin className="w-4 h-4" />
          </div>
          <h4 className="text-base font-medium text-white">Studio Atelier</h4>
        </div>
        <p className="text-sm text-zinc-300 font-light leading-relaxed">
          KW SRISHTI-2, Raj Nagar Extension, Ghaziabad, Delhi NCR, Uttar Pradesh 201003
        </p>
      </div>

      {/* Direct Contact Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="tel:+917827473377"
          className="p-5 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-amber-300/40 transition-colors group block"
        >
          <div className="flex items-center space-x-2.5 text-amber-300 mb-2">
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Direct Studio Line</span>
          </div>
          <p className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
            +91 78274 73377
          </p>
          <p className="text-[11px] text-zinc-500 mt-1">Available on Call & WhatsApp</p>
        </a>

        <a
          href="mailto:1dreamdesignstudioo@gmail.com"
          className="p-5 rounded-2xl bg-[#121418] border border-white/[0.08] hover:border-amber-300/40 transition-colors group block"
        >
          <div className="flex items-center space-x-2.5 text-amber-300 mb-2">
            <Mail className="w-4 h-4" />
            <span className="text-[10px] font-mono uppercase tracking-wider">Official Inquiries</span>
          </div>
          <p className="text-xs font-semibold text-white group-hover:text-amber-200 transition-colors truncate">
            1dreamdesignstudioo@gmail.com
          </p>
          <p className="text-[11px] text-zinc-500 mt-1">Average Response: &lt; 24h</p>
        </a>
      </div>

      {/* Service Regions */}
      <div className="p-6 rounded-2xl bg-[#121418] border border-white/[0.08]">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-amber-300/10 text-amber-300">
            <Compass className="w-4 h-4" />
          </div>
          <h4 className="text-base font-medium text-white">Active Realization Zones</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {serviceAreas.map((city) => (
            <span
              key={city}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300 flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{city}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Atelier Working Hours */}
      <div className="p-6 rounded-2xl bg-[#121418] border border-white/[0.08]">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 rounded-lg bg-amber-300/10 text-amber-300">
            <Clock className="w-4 h-4" />
          </div>
          <h4 className="text-base font-medium text-white">Consultation Hours</h4>
        </div>
        <div className="space-y-1.5 text-xs text-zinc-400 font-mono">
          <p className="flex justify-between">
            <span>Monday – Friday:</span>
            <span className="text-zinc-200 font-medium">09:30 AM – 07:00 PM IST</span>
          </p>
          <p className="flex justify-between">
            <span>Saturday:</span>
            <span className="text-zinc-200 font-medium">10:00 AM – 05:00 PM IST</span>
          </p>
          <p className="flex justify-between text-zinc-500">
            <span>Sunday:</span>
            <span>By Prior Appointment Only</span>
          </p>
        </div>
      </div>
    </div>
  );
}
