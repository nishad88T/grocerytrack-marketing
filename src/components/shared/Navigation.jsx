import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { createPageUrl } from '@/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: close menu when Escape is pressed
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/Features', label: 'Features' },
    { to: '/About', label: 'About' },
    { to: '/Pricing', label: 'Pricing' },
    { to: '/FAQs', label: 'FAQs' },
  ];

  return (
    <header className="p-4 md:p-6 bg-white/95 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={createPageUrl('/')} onClick={closeMenu} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
            {/* lightweight placeholder logo (replace with actual svg if you have one) */}
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="8" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="text-slate-900 font-semibold text-lg hidden md:inline">GroceryIntel™</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={createPageUrl(l.to)}
                  className="text-slate-700 hover:text-slate-900"
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.groceryintel.com"
            className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-sm font-medium"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="p-2 rounded-md text-slate-800 hover:bg-slate-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu + backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop (semi-opaque to dim page content) */}
        <div onClick={closeMenu} className="absolute inset-0 bg-black/50" />

        {/* Slide-in panel from right */}
        <aside
          className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <Link to={createPageUrl('/')} onClick={closeMenu} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="6" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-semibold text-slate-900">GroceryIntel</span>
            </Link>
            <button onClick={closeMenu} aria-label="Close menu"><X className="w-5 h-5" /></button>
          </div>

          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={createPageUrl(l.to)}
                    onClick={closeMenu}
                    className="block text-slate-800 text-lg font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="https://app.groceryintel.com"
                  onClick={closeMenu}
                  className="block text-center px-4 py-2 bg-emerald-500 text-white rounded-lg"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Navigation;
