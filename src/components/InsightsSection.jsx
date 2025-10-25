import React from "react";
import ServiceCard from "./ServiceCard";
import Articles from "./Articles";


const InsightsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                We don't just do multicultural.
              </span>
              <span className="text-red-600 block">We make you visible.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We connect brands with diverse audiences through authentic and
              impactful creative solutions. Discover how our expertise can
              elevate your reach and resonance.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard />
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              Work With Us
            </button>
          </div>
        </div>

        {/* Articles Section */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className=" mb-8">
            <h2 className="md:text-4xl text-xl max-[400px]:flex font-bold text-gray-900 mb-4">
              <div className="inline-block bg-red-600 text-white font-semibold px-6 py-2 rounded-tr-lg rounded-bl-lg transform -skew-x-6 select-none">
                <span className="inline-block transform skew-x-6">Stereotypes</span>
              </div>
              <span className="text-black ml-2 ">Aren't Strategy</span>
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Articles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
