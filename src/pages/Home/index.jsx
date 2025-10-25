import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import WorkSection from '../../components/WorkSection';
import MarketsSection from '../../components/MarketsSection';
import MediaInnovationSection from '../../components/MediaInnovationSection';
import InsightsSection from '../../components/InsightsSection';
import FoundersSection from '../../components/FoundersSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <Hero />
      <WorkSection />
      <MarketsSection />
      <InsightsSection />
      <FoundersSection />
      <Footer />
    </div>
  );
};

export default Home;