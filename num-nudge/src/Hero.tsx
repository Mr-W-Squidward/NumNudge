import React from 'react';
import mathImage from './assets/imgs/mathImage.png';
import './index.css'; 

interface HeroSectionProps {
  onSignUpClick: () => void; 
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSignUpClick }) => {
  return (
    <div className="flex items-center justify-center bg-black text-white py-20 px-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8 relative z-10">
        <div className="md:w-1/2 p-4 text-center md:text-left relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-gold">NumNudge: Math & Programming Tutoring</h1>
          <p className="text-lg mb-4">
            Welcome to NumNudge! Our newly built tutoring platform offers high-quality math help for high schoolers and elementary schoolers, along with programming instruction in Python, HTML, CSS, and JavaScript (web development). Whether you're preparing for exams or diving into web development, NumNudge is here to support your educational journey.
          </p>
          <button onClick={onSignUpClick} className="bg-gold text-black py-2 px-6 rounded hover:bg-yellow-600 btn-hover">Sign Up</button>
        </div>
        <div className="md:w-1/2 p-4 relative z-10">
          <img src={mathImage} alt="Mathematics illustration" className="rounded-lg shadow-bold"/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;