import React from 'react';
import { Link } from 'react-router-dom';

const FoundersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl bg-red-50 mx-auto py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-12 items-center mb-16">
          {/* Founder Image */}
          <div className="relative">
            
            <div className="relative w-full max-sm:max-w-[90vw] mx-auto p-0 sm:max-w-md">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden relative z-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img className="w-full h-full object-cover" src="/professional-headshot-founder.jpg" alt="Founder" />
                </div>
              </div>
              <div className="absolute inset-0 rotate-4 z-20 flex items-center justify-center pointer-events-none origin-center">
                <div className="w-full h-full border-2 border-red-600 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Founder Content */}
          <div className="space-y-6 pr-8 max-lg:pl-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Leading the Conversation on
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
                Multicultural Growth.
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-700">
                30+ Years of Global Experience
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over three decades of experience in global markets and multicultural marketing, 
                our founder brings deep insights into connecting brands with diverse communities. 
                A mentor to emerging marketers and a thought leader in the industry.
              </p>
            </div>

            <Link 
              to="/founders" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 group"
            >
              <span>Explore Founder Insights</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 lg:p-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-lg:flex max-lg:flex-col max-lg:items-center">
              <p className="text-gray-600 text-base tracking-widest leading-relaxed">
                Let's design for resonance: strategy, creative, media — integrated.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-1 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 group"
                >
                  <span>Book a Strategy Session</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link 
                  to="/work" 
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-1 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  See the Work
                </Link>
              </div>
            </div>

            {/* Award Section */}
            <div className="text-center lg:text-right">
              <div className="inline-block">
                <img src="/Marketing-Awards-2022-Winner.png" alt="Marketing Awards 2022 Winner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
