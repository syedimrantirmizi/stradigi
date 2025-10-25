import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InsightsSection from '../../components/InsightsSection';

const Insights = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <InsightsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Insights;