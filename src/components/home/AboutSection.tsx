import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Interior Design" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dream Design Studio</h2>
            <p className="text-xl text-gray-600 mb-6">
              Dream Design Studio is a premier architecture and interior design firm dedicated to creating exceptional spaces that inspire and delight.
            </p>
            <p className="text-gray-600 mb-8">
              With our team of talented designers and architects, we bring creativity, innovation, and technical expertise to every project, ensuring results that exceed expectations. We believe that great design should be both beautiful and functional, enhancing the way people live, work, and interact with their environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">We maintain the highest standards in every aspect of our work.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600">We embrace creativity and forward-thinking approaches.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Client-Centered</h3>
                  <p className="text-gray-600">Your vision and satisfaction are our top priorities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-md mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">We respect deadlines and deliver projects on schedule.</p>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
