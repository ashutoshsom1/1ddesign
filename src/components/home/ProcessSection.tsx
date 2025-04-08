import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We begin with an in-depth consultation to understand your vision, requirements, and budget. This crucial first step allows us to align our expertise with your expectations.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Concept Development',
    description: 'Our design team creates initial concepts based on your input. We explore different possibilities and develop a strong foundation for your project that aligns with your vision.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Design & Planning',
    description: 'We refine the chosen concept into detailed designs and comprehensive plans. This includes material selection, color schemes, layouts, and all technical specifications.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'Our skilled team brings the designs to life with precision and attention to detail. We manage all aspects of the implementation process, ensuring quality at every step.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure every project is completed to the highest standards.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-20 bottom-0 w-0.5 bg-gray-200 z-0"></div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10 flex mb-12">
                <div className="flex-shrink-0 bg-white">
                  <div className="flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <div className="ml-8">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 text-sm font-semibold py-1 px-3 rounded-full mr-3">
                      Step {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
