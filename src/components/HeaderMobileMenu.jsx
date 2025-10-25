import React from "react";
import { Link } from "react-router-dom";

const HeaderMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-1 mb-5 space-y-1 sm:px-3 bg-gray-600/40 rounded-2xl ">
        <Link
          to="/work"
          className="block px-3 py-2 text-white border-b border-white/20 hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Work
        </Link>
        <Link
          to="/markets"
          className="block px-3 py-2 text-white border-b border-white/20 hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Markets
        </Link>
        <Link
          to="/mediainnovation"
          className="block px-3 py-2 text-white border-b border-white/20 hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Media Innovations
        </Link>
        <Link
          to="/insights"
          className="block px-3 py-2 text-white border-b border-white/20 hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Insights
        </Link>
        <Link
          to="/founders"
          className="block px-3 py-2 text-white border-b border-white/20 hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Founders POV
        </Link>
        <Link
          to="/contact"
          className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
