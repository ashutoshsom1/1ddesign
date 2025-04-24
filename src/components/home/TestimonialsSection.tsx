"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Shrey',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: 'Dream Design Studio transformed our house into a stunning home that perfectly reflects our style and needs. Their attention to detail and creative solutions exceeded our expectations. The team was professional, responsive, and a joy to work with throughout the entire process.',
  },
  {
    id: 2,
    name: 'Ritanshu',
    role: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: 'Working with Dream Design Studio on our office renovation was an excellent experience. They understood our brand and created a space that impresses clients while enhancing our team&apos;s productivity. Their ability to balance aesthetics with functionality is truly remarkable.',
  },
  {
    id: 3,
    name: 'Himanshu',
    role: 'Restaurant Owner',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    quote: 'The team at Dream Design Studio designed a restaurant space that has become a talking point among our customers. Their innovative approach and understanding of our concept resulted in a unique dining environment that enhances the overall experience. Highly recommended!',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Dream Design Studio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-800 rounded-xl p-8 md:p-12">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <div className="relative">
              <div className="mb-8">
                <p className="text-xl italic leading-relaxed">&quot;{testimonials[activeIndex].quote}&quot;</p>
              </div>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

