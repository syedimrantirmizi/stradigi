import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with filmstrip pattern */}
      <div className="absolute inset-0 bg-red-600/90 filmstrip-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Canada's Challenger Multicultural Agency
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-shadow">
          <span className="text-white block sm:whitespace-nowrap">Your Market Is Changing.</span>
          <span className="text-cyan-400 block">Is Your Agency?</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-7xl mx-auto leading-relaxed [word-spacing:0.3rem] tracking-[3px]">
          Over 80% of Canada's new consumers are newcomers. If your plan ignores them, it's incomplete.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 group"
          >
            <span>Book a Strategy Session</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link 
            to="/work" 
            className="bg-white/30 backdrop-blur-3xl  text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
          >
            See the Work
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
