import React from "react";
import { Link } from "react-router-dom";

const FooterQuickLinks = () => {
  return (
    <div className="space-y-4 md:flex md:flex-col md:items-end">
      <h4 className="text-lg font-semibold text-gray-900 md:w-2/4">Quick Links</h4>
      <ul className="space-y-2 list-disc pl-5">
        <li>
          <Link to="/work" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            Work
          </Link>
        </li>
        <li>
          <Link to="/markets" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            Markets
          </Link>
        </li>
        <li>
          <Link to="/mediainnovation" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            Media Innovations
          </Link>
        </li>
        <li>
          <Link to="/insights" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            Insights
          </Link>
        </li>
        <li>
          <Link to="/founders" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            Founders POV
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
