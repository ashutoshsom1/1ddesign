import React from 'react';
import HistorySection from '@/components/about/HistorySection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import StatsSection from '@/components/about/StatsSection';
import CtaSection from '@/components/home/CtaSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Dream Design Studio</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Dream Design Studio is a premier architecture and interior design firm dedicated to creating exceptional spaces that inspire and delight. With our team of talented designers and architects, we bring creativity, innovation, and technical expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <HistorySection />

      {/* Stats Section */}
      <StatsSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
