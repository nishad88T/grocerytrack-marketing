import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          <Link to={createPageUrl('/')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Home
          </Link>
          <Link to={createPageUrl('Features')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Features
          </Link>
          <Link to={createPageUrl('Pricing')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Pricing
          </Link>
          <Link to={createPageUrl('FAQs')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            FAQs
          </Link>
          <Link to={createPageUrl('About')} className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            About
          </Link>
          <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
            <a href="https://app.groceryintel.com">Get Started</a>
          </Button>
        </nav>
        
        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Mobile menu */}
            <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-xl md:hidden transform transition-transform duration-300 ease-in-out isolate">
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-slate-700 hover:text-emerald-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Navigation links */}
              <nav className="flex flex-col gap-4 p-6 pt-0">
                <Link 
                  to={createPageUrl('/')} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-slate-700 hover:text-emerald-600 font-medium transition-colors py-3 border-b border-slate-100"
                >
                  Home
                </Link>
                <Link 
                  to={createPageUrl('Features')} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-slate-700 hover:text-emerald-600 font-medium transition-colors py-3 border-b border-slate-100"
                >
                  Features
                </Link>
                <Link 
                  to={createPageUrl('Pricing')} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-slate-700 hover:text-emerald-600 font-medium transition-colors py-3 border-b border-slate-100"
                >
                  Pricing
                </Link>
                <Link 
                  to={createPageUrl('FAQs')} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-slate-700 hover:text-emerald-600 font-medium transition-colors py-3 border-b border-slate-100"
                >
                  FAQs
                </Link>
                <Link 
                  to={createPageUrl('About')} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-slate-700 hover:text-emerald-600 font-medium transition-colors py-3 border-b border-slate-100"
                >
                  About
                </Link>
                
                {/* Get Started button */}
                <Button asChild className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                  <a href="https://app.groceryintel.com">Get Started</a>
                </Button>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
