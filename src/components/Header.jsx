import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 md:p-6 bg-white/90 backdrop-blur-sm border-b border-emerald-100/50 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href__="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">GroceryIntel™</h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href__="/" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Home
          </a>
          <a href__="/features" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Features
          </a>
          <a href__="/pricing" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Pricing
          </a>
          <a href__="/faqs" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            FAQs
          </a>
          <a href__="/about" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            About
          </a>
          <a href__="https://app.groceryintel.com" className="inline-block">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
              Get Started
            </button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-900 hover:text-emerald-600 transition-colors z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - FIXED VERSION */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden">
            <nav className="flex flex-col gap-4 p-6 pt-20">
              <a 
                href__="/" 
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href__="/features" 
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href__="/pricing" 
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href__="/faqs" 
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <a 
                href__="/about" 
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href__="https://app.groceryintel.com"
                className="inline-block mt-4"
              >
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Get Started
                </button>
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
