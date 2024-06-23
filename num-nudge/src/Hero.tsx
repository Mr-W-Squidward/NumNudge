import React from 'react';
import mathImage from './assets/imgs/mathImage.png';

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-black text-white py-20 px-8">
      <div className="flex flex-col md:flex-row items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gold">NumNudge</h1>
          <p className="text-lg mb-4">
            Welcome to NumNudge! Our newly built tutoring platform. Are you ready to dive into the world of advanced
            mathematics? Maybe get a leg up on the next grade? NumNudge is here for you! We are dedicated to providing quality education 
            in a variety of fields. If you are interested, get in contact with us!
          </p>
          <button className="bg-gold text-black py-2 px-6 rounded hover:bg-yellow-600">Sign Up</button>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={mathImage} alt="Mathematics illustration" className="rounded-lg shadow-bold"/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
