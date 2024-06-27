import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  onSignUpClick: () => void;
  onFAQClick: () => void;
  onContactClick: () => void;
  onTutorsClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSignUpClick, onFAQClick, onContactClick, onTutorsClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-gold py-4 px-8 flex justify-between items-center relative">
      <div className="text-2xl font-bold">
        <Link to="/">NumNudge</Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={onFAQClick} className="py-2">FAQ</button>
        <button onClick={onContactClick} className="py-2">Contact Us</button>
        <button onClick={onTutorsClick} className="py-2">Meet The Tutors</button>
        <button onClick={onSignUpClick} className="bg-gold text-black px-4 py-2 rounded">Sign up now!</button>
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
      <div className={`absolute top-full left-0 w-full bg-black text-gold flex flex-col space-y-4 py-4 px-8 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={onFAQClick} className="py-2">FAQ</button>
        <button onClick={onContactClick} className="py-2">Contact Us</button>
        <button onClick={onTutorsClick} className="py-2">Meet The Tutors</button>
        <button onClick={onSignUpClick} className="bg-gold text-black px-4 py-2 rounded">Sign up now!</button>
      </div>
    </nav>
  );
};

export default NavBar;