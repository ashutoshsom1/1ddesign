import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Space with Dream Design Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Unleash exceptional design and superior craftsmanship. Explore our bespoke solutions and redefine your space today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center"
            >
              Get a Quote
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md border border-white transition duration-300 text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
