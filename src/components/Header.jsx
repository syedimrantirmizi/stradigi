import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgAlpha, setBgAlpha] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const start = 0; // scroll position where transition starts
    const end = 300; // scroll position where transition ends (fully opaque)

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const t = Math.min(Math.max((y - start) / (end - start), 0), 1);
      setBgAlpha(Number((t * 0.8).toFixed(3)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: `rgba(0,0,0,${bgAlpha})`, transition: "background-color 180ms linear" }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between h-24 px-5">
          {/* Logo */}
          <Link to="/" className="">
        <img src="STRADIGI-R-logo.png" alt="Stradigi logo" className="h-8 sm:h-10 md:h-16 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              Work
            </Link>
            <Link
              to="/markets"
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              Markets
            </Link>
            <Link
              to="/mediainnovation"
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              Media Innovations
            </Link>
            <Link
              to="/insights"
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              Insights
            </Link>
            <Link
              to="/founders"
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              Founders POV
            </Link>
            {/* Contact Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white px-6 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-200 flex items-center space-x-2"
              >
                <span>CONTACT</span>
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white px-2 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-400 focus:outline-none focus:text-red-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
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
        )}
      </div>
    </header>
  );
};

export default Header;
