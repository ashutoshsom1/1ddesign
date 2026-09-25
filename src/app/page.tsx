import Hero from "@/components/home/Hero";
import ArchitecturalTicker from "@/components/home/ArchitecturalTicker";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="bg-[#0b0c0e] min-h-screen text-white selection:bg-amber-300 selection:text-black">
      {/* 1. Hero: Cinematic Split-Screen with Editorial Typography */}
      <Hero />

      {/* 2. Infinite Marquee: Architectural Disciplines & Standards */}
      <ArchitecturalTicker />

      {/* 3. Bento Portfolio: Interactive Gallery with Filterable Works & Lightbox Modal */}
      <PortfolioShowcase />

      {/* 4. Interactive Dual-View & Material Transformation Slider */}
      <BeforeAfterSlider />

      {/* 5. Comprehensive Studio Disciplines & Services */}
      <ServicesSection />

      {/* 6. Systematic 4-Stage Architectural Methodology & Deliverables */}
      <ProcessSection />

      {/* 7. Studio Philosophy & Architectural Craftsmanship */}
      <AboutSection />

      {/* 8. Verified Endorsements & Architectural Metrics */}
      <TestimonialsSection />

      {/* 9. Commission Action & Direct Studio Line */}
      <CtaSection />
    </main>
  );
}
