import React, { useState, useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderMobileMenu from "./HeaderMobileMenu";

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
          <HeaderLogo />

          <HeaderNav />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
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

        <HeaderMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
