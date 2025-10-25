import React from 'react';
import { Link } from 'react-router-dom';
import FooterQuickLinks from './FooterQuickLinks';
import FooterContact from './FooterContact';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">STRADIGI</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leveraging big data, artificial intelligence, and deep cultural insights to create 
              authentic connections between brands and diverse communities across Canada.
            </p>
          </div>

          <FooterQuickLinks />

          <FooterContact />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Stradigi Marketing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-red-600 text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-red-600 text-sm transition-colors duration-200">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-red-600 text-sm transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
