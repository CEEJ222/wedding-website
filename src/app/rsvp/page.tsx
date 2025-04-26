'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
  const [hasPlusOne, setHasPlusOne] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      plusOneName: formData.get('plusOneName'),
    };
    
    // TODO: Implement form submission to Supabase
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-3xl font-light text-center mb-8">RSVP</h1>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
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
              />
              <label htmlFor="hasPlusOne" className="ml-2 block text-sm text-gray-700">
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
                <label htmlFor="plusOneName" className="block text-sm font-medium text-gray-700 mb-1">
                  Plus One's Full Name
                </label>
                <input
                  type="text"
                  id="plusOneName"
                  name="plusOneName"
                  required={hasPlusOne}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
            >
              Submit RSVP
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
} 