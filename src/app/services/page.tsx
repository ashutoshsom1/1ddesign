import React from 'react';
import ServicesList from '@/components/services/ServicesList';
import CtaSection from '@/components/home/CtaSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-center text-lg mb-0 max-w-3xl mx-auto">
            We offer a comprehensive range of architectural and interior design services tailored to meet your unique needs.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ServicesList />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
