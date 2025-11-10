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
      <header className="p-4 md:p-6 bg-white/90 backdrop-blur-sm border-b border-emerald-100/50 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={createPageUrl('/')} className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">GroceryIntel™</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/Features" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Features
            </Link>
            <Link to="/About" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/Pricing" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/FAQs" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              FAQs
            </Link>
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
              <a href="https://app.groceryintel.com">Get Started</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
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
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <span className="text-lg font-bold text-slate-900">Menu</span>
            <button 
              onClick={closeMenu}
              className="p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/Features" 
                  className="block px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/About" 
                  className="block px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md font-medium transition-colors"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/Pricing" 
                  className="block px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/FAQs" 
                  className="block px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md font-medium transition-colors"
                  onClick={closeMenu}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Get Started Button */}
          <div className="p-4 border-t border-slate-200">
            <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
              <a href="https://app.groceryintel.com">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;