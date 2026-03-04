import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let requestRef;
    
    const toggleVisibility = () => {
      // 1. requestAnimationFrame batches the scroll read to prevent Forced Reflow
      requestRef = requestAnimationFrame(() => {
        // Use window.scrollY (standard) and only update state if value changes
        const shouldShow = window.scrollY > 500;
        setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
      });
    };

    // 2. { passive: true } is CRITICAL for mobile scroll performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 left-8 z-[1000] transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        // 3. ADDED: aria-label for 100/100 Accessibility score
        aria-label="Scroll back to top"
        className="group relative flex items-center space-x-4 bg-black/20 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full hover:border-green-500 hover:bg-black/40 transition-all duration-500"
      >
        {/* The Technical Circle */}
        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white group-hover:bg-green-500 transition-all duration-500 shadow-2xl">
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-500" />
        </div>

        {/* Animated Progress Ring (Visual Only) */}
        <div className="absolute inset-0 rounded-full border border-green-500/10 scale-110 group-hover:scale-125 transition-transform duration-1000" />
      </button>
    </div>
  );
}