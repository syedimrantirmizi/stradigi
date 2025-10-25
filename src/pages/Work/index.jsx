import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WorkSection from '../../components/WorkSection';

const Work = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
};

export default Work;