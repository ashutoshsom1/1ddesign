import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          We'd love to hear from you. Reach out to discuss your project or schedule a consultation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
