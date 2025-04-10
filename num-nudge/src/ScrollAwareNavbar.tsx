import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const ScrollAwareNavBar: React.FC<React.ComponentProps<typeof NavBar>> = (props) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <NavBar {...props} />
    </div>
  );
};

export default ScrollAwareNavBar;