import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MediaInnovationSection from '../../components/MediaInnovationSection';

const MediaInnovation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <MediaInnovationSection />
      </div>
      <Footer />
    </div>
  );
};

export default MediaInnovation;