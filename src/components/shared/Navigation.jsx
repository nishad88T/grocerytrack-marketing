import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-b border-emerald-100/50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={createPageUrl('/')} className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">GroceryIntel™</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to={createPageUrl('/')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Home
            </Link>
            <Link to={createPageUrl('Features')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Features
            </Link>
            <Link to={createPageUrl('About')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </Link>
            <Link to={createPageUrl('Pricing')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to={createPageUrl('FAQs')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              FAQs
            </Link>
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
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Slide-in Panel */}
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
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
                <Link
                  to={createPageUrl('/')}
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 hover:text-emerald-600 py-2 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to={createPageUrl('Features')}
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 hover:text-emerald-600 py-2 transition-colors"
                >
                  Features
                </Link>
                <Link
                  to={createPageUrl('About')}
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 hover:text-emerald-600 py-2 transition-colors"
                >
                  About
                </Link>
                <Link
                  to={createPageUrl('Pricing')}
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 hover:text-emerald-600 py-2 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to={createPageUrl('FAQs')}
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 hover:text-emerald-600 py-2 transition-colors"
                >
                  FAQs
                </Link>
                
                {/* Get Started Button */}
                <Button asChild className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                  <a href="https://app.groceryintel.com">Get Started</a>
                </Button>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;