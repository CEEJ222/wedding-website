'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    setIsUploading(true);
    // TODO: Implement file upload to Supabase
    console.log('File selected:', e.target.files[0]);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-light text-center mb-12 text-black">Photo Gallery</h1>
        
        {/* Upload Section */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
          <h2 className="text-2xl font-light mb-4 text-gray-900">Share Your Photos</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            After the celebration, you'll be able to upload your photos here to share 
            with everyone. Check back soon!
          </p>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-900 font-medium">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-700">PNG, JPG or JPEG</p>
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </label>
          </div>
        </div>

        {/* Gallery Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
            <p className="text-gray-700 font-medium">Photos will appear here</p>
          </div>
          <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
            <p className="text-gray-700 font-medium">Photos will appear here</p>
          </div>
          <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
            <p className="text-gray-700 font-medium">Photos will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
} 