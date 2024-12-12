"use client"; // Add this at the top

import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader, e.g., 3 seconds
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <p className="text-orange-500 text-3xl font-bold animate-pulse">Loading...</p>
        <p className="text-white mt-2">“Your custom quote here!”</p>
      </div>
    </div>
  );
};

export default Preloader;
