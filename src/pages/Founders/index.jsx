import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FoundersSection from '../../components/FoundersSection';

const Founders = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <FoundersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Founders;