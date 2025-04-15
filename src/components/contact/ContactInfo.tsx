import React from 'react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Our Location</h3>
        <p>KW SRISHTI-2, Raj Nagar Extension,<br />Ghaziabad, Delhi, Uttar Pradesh 201003</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Lucknow', 'Prayagraj', 'New Delhi'].map((city) => (
            <div key={city} className="flex items-center bg-blue-50 p-3 rounded-lg">
              <svg 
                className="w-5 h-5 text-blue-600 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <span className="font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Email Us</h3>
        <a href="mailto:1dreamdesignstudioo@gmail.com" className="text-blue-600 hover:text-blue-700">
          1dreamdesignstudioo@gmail.com
        </a>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Call Us</h3>
        <a href="tel:078274 73377" className="text-blue-600 hover:text-blue-700">
          078274 73377
        </a>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
        <div className="space-y-2">
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/1d_studio/?igsh=cGptcWxsNmd2NDFi#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-50 p-3 rounded-full hover:bg-blue-100 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}




