import React from "react";
import { Link } from "react-router-dom";

const HeroCTAs = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link 
        to="/contact" 
        className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 group"
      >
        <span className='max-sm:text-sm'>Book a Strategy Session</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      
      <Link 
        to="/work" 
        className="bg-white/30 backdrop-blur-3xl max-sm:text-sm  text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
      >
        See the Work
      </Link>
    </div>
  );
};

export default HeroCTAs;
