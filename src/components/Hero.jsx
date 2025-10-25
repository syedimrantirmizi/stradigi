import React from 'react';
import HeroCTAs from './HeroCTAs';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with filmstrip pattern */}
      <div className="absolute inset-0 bg-red-600/90 filmstrip-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="my-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm max-sm:text-xs font-medium backdrop-blur-sm">
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
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-7xl mx-auto leading-normal sm:leading-relaxed  sm:[word-spacing:0.3rem] sm:tracking-[3px]">
          Over 80% of Canada's new consumers are newcomers. If your plan ignores them, it's incomplete.
        </p>

        {/* CTA Buttons */}
        <HeroCTAs />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
