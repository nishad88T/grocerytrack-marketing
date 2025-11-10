import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/Features', label: 'Features' },
    { to: '/About', label: 'About' },
    { to: '/Pricing', label: 'Pricing' },
    { to: '/FAQs', label: 'FAQs' },
  ];

  return (
    <header className="sticky top-0 z-50 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-b border-emerald-100/50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">GroceryIntel™</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
            <a href="https://app.groceryintel.com">Get Started</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMenu}
              className="p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                <a href="https://app.groceryintel.com">Get Started</a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;