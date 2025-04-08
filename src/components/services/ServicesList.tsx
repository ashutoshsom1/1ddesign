"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Architecture',
    description: 'Our Architecture services combine innovative design with practical functionality to create spaces that inspire. With a focus on sustainability, aesthetics, and personalized solutions, we deliver architectural designs that stand the test of time while meeting the unique needs of each client.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Custom residential and commercial designs',
      'Sustainable and eco-friendly solutions',
      'Comprehensive planning and documentation',
      'Building code compliance',
      'Project management and supervision',
    ],
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'We specialize in creating stunning, functional interiors that reflect your style and vision. From concept to completion, our team blends creativity with precision, offering tailored designs that elevate both residential and commercial spaces. We consider every detail to create harmonious environments that enhance daily living and working experiences.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    features: [
      'Space planning and layout optimization',
      'Custom furniture and fixture selection',
      'Color scheme and material coordination',
      'Lighting design and implementation',
      'Accessory and artwork curation',
    ],
  },
  {
    id: 3,
    title: '3D Visualization',
    description: 'Our 3D visual services bring your design concepts to life with stunning clarity and precision. From realistic architectural renderings to immersive 3D walkthroughs, we help you visualize spaces before they\'re built, ensuring every detail aligns with your vision and expectations. This powerful tool aids in decision-making and refinement throughout the design process.',
    image: 'https://images.unsplash.com/photo-1545065053-73dbb3eec985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Photorealistic 3D renderings',
      'Virtual reality experiences',
      'Interactive 3D walkthroughs',
      'Conceptual visualization',
      'Marketing and presentation materials',
    ],
  },
  {
    id: 4,
    title: 'Renovation',
    description: 'Transform your existing space with our comprehensive renovation services. We breathe new life into outdated areas, optimizing functionality while enhancing aesthetic appeal. Our team handles everything from minor updates to complete overhauls, ensuring minimal disruption and maximum satisfaction throughout the renovation process.',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    features: [
      'Kitchen and bathroom remodeling',
      'Structural modifications',
      'Flooring and wall treatments',
      'Electrical and plumbing updates',
      'Historical restoration',
    ],
  },
  {
    id: 5,
    title: 'Landscape Design',
    description: 'Create stunning outdoor spaces that complement your architecture with our landscape design services. We blend natural elements with thoughtful planning to create beautiful environments that extend your living space outdoors. Our sustainable approaches ensure your landscape thrives while minimizing environmental impact.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Garden and planting design',
      'Outdoor living spaces',
      'Water features and irrigation',
      'Lighting and hardscape elements',
      'Sustainable landscaping solutions',
    ],
  },
  {
    id: 6,
    title: 'Design Consultancy',
    description: 'Our expert design consultancy services provide personalized solutions that bring your vision to life. From concept to execution, we blend creativity with technical precision, ensuring every space is functional, aesthetically pleasing, and tailored to your unique needs. Our consultants offer guidance on all aspects of design, helping you make informed decisions.',
    image: 'https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Design strategy and planning',
      'Material and finish selection',
      'Vendor and contractor recommendations',
      'Budget optimization',
      'Project coordination',
    ],
  },
];

export default function ServicesList() {
  return (
    <div className="space-y-24">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image Side */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <h3 className="text-xl font-semibold mb-3">What We Offer:</h3>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
