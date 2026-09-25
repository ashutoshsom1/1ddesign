"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/contact');
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      
      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear the authentication cookie
    document.cookie = 'admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/admin/login');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dream Design Studio Admin</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Contact Form Submissions</h2>
          
          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="mt-2">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-800 p-4 rounded-md">
              {error}
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No submissions yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Service</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">{formatDate(submission.date)}</td>
                      <td className="py-3 px-4">{submission.name}</td>
                      <td className="py-3 px-4">{submission.email}</td>
                      <td className="py-3 px-4">{submission.service}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View Details
                          </button>
                          <a
                            href={`mailto:${submission.email}?subject=${encodeURIComponent(`Re: Spatial Consultation Brief - 1 Dream Design Studio`)}`}
                            className="text-amber-700 hover:text-amber-900 text-xs font-semibold px-2.5 py-1 bg-amber-50 hover:bg-amber-100 rounded-md border border-amber-200 transition-colors"
                          >
                            Email Client
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal for viewing submission details */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Submission Details</h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Submitted on</p>
                  <p>{formatDate(selectedSubmission.date)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p>{selectedSubmission.name}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{selectedSubmission.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>{selectedSubmission.phone || 'Not provided'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Service Interested In</p>
                  <p>{selectedSubmission.service}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Message</p>
                  <div className="bg-gray-50 p-3 rounded-md mt-1">
                    <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <a
                  href={`mailto:${selectedSubmission.email}?subject=${encodeURIComponent(`Re: Spatial Consultation Brief - 1 Dream Design Studio`)}`}
                  className="bg-amber-500 text-zinc-950 px-4 py-2 rounded-md hover:bg-amber-400 transition duration-300 text-sm font-semibold flex items-center space-x-1.5"
                >
                  <span>Reply via Email</span>
                </a>
                {selectedSubmission.phone && (
                  <a
                    href={`https://wa.me/${selectedSubmission.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedSubmission.name}, thank you for reaching out to 1 Dream Design Studio regarding ${selectedSubmission.service}. I would love to discuss your project.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300 text-sm font-medium flex items-center space-x-1.5"
                  >
                    <span>WhatsApp</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
