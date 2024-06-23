import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-gold py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">NumNudge</div>
      
      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center space-x-4 ${isOpen ? 'hidden' : ''}`}>
        <a href="#faq" className="py-2">FAQ</a>
        <a href="#contact" className="py-2">Contact Us</a>
        <a href="#meet" className="py-2">Meet The Tutors</a>
        <button className="bg-gold text-black px-4 py-2 rounded">Sign up now!</button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`absolute top-16 left-0 w-full bg-black text-gold flex flex-col space-y-4 py-4 px-8 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#faq" className="py-2">FAQ</a>
        <a href="#contact" className="py-2">Contact Us</a>
        <a href="#meet" className="py-2">Meet The Tutors</a>
        <button className="bg-gold text-black px-4 py-2 rounded">Sign up now!</button>
      </div>
    </nav>
  );
};

export default NavBar;
