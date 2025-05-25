'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function RSVP() {
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Carousel state
  const images = [
    '/images/Betsy-CJ/LP0_7239_Retouched_LindseyByrnes.jpg',
    '/images/Betsy-CJ/LP0_7102 copy-retouched_LindseyByrnes.jpg',
    '/images/Betsy-CJ/LP0_7260 copy.jpg',
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextImage = () => setCarouselIndex((i) => (i + 1) % images.length);
  const prevImage = () => setCarouselIndex((i) => (i - 1 + images.length) % images.length);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) return;
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      plusOneName: formData.get('plusOneName'),
      note: formData.get('note'),
    };

    try {
      const response = await fetch('/api/rsvp-proxy', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const text = await response.text();
      console.log('RAW RESPONSE:', text);
      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        result = { result: response.ok ? 'success' : 'error' };
      }
      if (result.result === 'success') {
        setSuccess(true);
        e.currentTarget.reset();
        setHasPlusOne(false);
        setTimeout(() => setSuccess(false), 5000); // Hide after 5 seconds
      } else {
        setSuccess(false);
        alert('There was an error submitting your RSVP.');
      }
    } catch (err) {
      setSuccess(false);
      alert('There was an error submitting your RSVP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-light text-center mb-8 text-black">RSVP</h1>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-md bg-green-100 border border-green-300 text-green-800 px-4 py-3 text-center font-medium shadow"
          >
            Thank you! Your RSVP has been received.
          </motion.div>
        )}

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900"
                disabled={loading}
              />
            </div>

            {/* Plus One Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasPlusOne"
                checked={hasPlusOne}
                onChange={(e) => setHasPlusOne(e.target.checked)}
                className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
                disabled={loading}
              />
              <label htmlFor="hasPlusOne" className="ml-2 block text-sm text-gray-900">
                I'm bringing a plus one
              </label>
            </div>

            {/* Plus One Name Field */}
            {hasPlusOne && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="plusOneName" className="block text-sm font-medium text-gray-900 mb-1">
                  Plus One's Full Name
                </label>
                <input
                  type="text"
                  id="plusOneName"
                  name="plusOneName"
                  required={hasPlusOne}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900"
                  disabled={loading}
                />
              </motion.div>
            )}

            {/* Note Field */}
            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-900 mb-1">
                Note or Dietary Restrictions (optional)
              </label>
              <textarea
                id="note"
                name="note"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900"
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors flex items-center justify-center ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit RSVP'
              )}
            </button>
          </div>
        </motion.form>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">Can't wait to see you there!</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="flex-1 flex justify-center">
              <Image
                src={src}
                alt={`Betsy & CJ ${idx + 1}`}
                width={300}
                height={450}
                className="object-cover rounded-lg"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          Photos by Lindsey Byrnes
        </div>
      </div>
    </div>
  );
} 