import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center shrink-0">
      <img src="/STRADIGI-R-logo.png" alt="Stradigi logo" className="h-8 md:h-12 lg:h-14 object-contain" />
    </Link>
  );
};

export default HeaderLogo;
