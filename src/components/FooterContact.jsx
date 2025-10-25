import React from "react";
import { Link } from "react-router-dom";

const FooterContact = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900">Contact us</h4>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-red-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-red-600 font-medium">30-Minute Meeting/Call</p>
            <p className="text-gray-600 text-sm">30-minute discussion/presentation</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-red-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-red-600 font-medium">15-minute Phone/Zoom Call</p>
            <p className="text-gray-600 text-sm">Hop-on a 15-minute introductory phone/zoom call</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
