import React from 'react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today to discuss your project and discover how Dream Design Studio can bring your vision to life.
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
