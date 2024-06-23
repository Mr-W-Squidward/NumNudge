import React from 'react';
import NavBar from './NavBar';
import HeroSection from './Hero';
import Curriculum from './Curriculum';
import Tutors from './Tutors';
import FAQSection from './FAQ';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <HeroSection />
      <Curriculum />
      <FAQSection />
      <Tutors />
    </div>
  );
};

export default App;