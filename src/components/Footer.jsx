import React from 'react';
import { Link } from 'react-router-dom';

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

          {/* Quick Links */}
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

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Contact us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-red-600 font-medium">30-Minute Meeting/Call</p>
                  <p className="text-gray-600 text-sm">30-minute discussion/presentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-red-600 font-medium">15-minute Phone/Zoom Call</p>
                  <p className="text-gray-600 text-sm">Hop-on a 15-minute introductory phone/zoom call</p>
                </div>
              </div>
            </div>
          </div>
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
