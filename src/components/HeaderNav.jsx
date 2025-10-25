import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link to="/work" className="text-white hover:text-red-400 transition-colors duration-200">
        Work
      </Link>
      <Link to="/markets" className="text-white hover:text-red-400 transition-colors duration-200">
        Markets
      </Link>
      <Link to="/mediainnovation" className="text-white hover:text-red-400 transition-colors duration-200">
        Media Innovations
      </Link>
      <Link to="/insights" className="text-white hover:text-red-400 transition-colors duration-200">
        Insights
      </Link>
      <Link to="/founders" className="text-white hover:text-red-400 transition-colors duration-200">
        Founders POV
      </Link>

      {/* Contact Button */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/contact"
          className="bg-transparent border border-cyan-400 text-cyan-400 px-6 py-1 rounded-full hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-200 flex items-center space-x-2"
        >
          <span>CONTACT</span>
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border border-cyan-400 text-cyan-400 px-2 py-2 rounded-full hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-200 flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderNav;
