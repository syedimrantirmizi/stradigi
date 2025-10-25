import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/STRADIGI-R-logo.png" alt="Stradigi logo" className="h-8 sm:h-10 md:h-16 object-contain" />
    </Link>
  );
};

export default HeaderLogo;
