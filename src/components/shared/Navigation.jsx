import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X /> : <Menu />}
      </button>
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{backgroundColor: '#ffffff', opacity: 1, isolation: 'isolate'}}>
        <div className="backdrop" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 40 }} onClick={toggleMenu} />
        {/* Add your navigation links here */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;