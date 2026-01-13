import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { WhyDifferent } from './components/WhyDifferent';
import { ContentList } from './components/ContentList';
import { TargetAudience } from './components/TargetAudience';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Problem />
      <WhyDifferent />
      <ContentList />
      <TargetAudience />
      <Testimonials />
      <FAQ />
      <Checkout />
      <Footer />
    </main>
  );
};

export default App;