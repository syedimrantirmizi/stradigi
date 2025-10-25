import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarketsSection from '../../components/MarketsSection';

const Markets = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <MarketsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Markets;