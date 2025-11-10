import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { createPageUrl } from '@/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll when menu open, restore when closed
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev || '';
      };
    }
    return;
  }, [isOpen]);

  // Close on Escape
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
    <header className="p-4 md:p-6 bg-white/95 border-b border-emerald-100 sticky top-0 z-[1000]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo + Title + BETA */}
        <Link to={createPageUrl('/')} onClick={closeMenu} className="flex items-center gap-3">
          {/* Icon (rounded square with cart) */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 4h2l1.6 8.4A2 2 0 007.6 15h9.8a2 2 0 001.98-1.6L21 6H6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="19" r="1.4" fill="white" />
              <circle cx="17" cy="19" r="1.4" fill="white" />
            </svg>
          </div>

          {/* Title + BETA pill */}
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-semibold text-lg md:text-xl">GroceryIntel™</span>
            <span className="ml-1 inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-2 py-1 rounded-full">BETA</span>
          </div>
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

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[1200] ${isOpen ? 'block' : 'pointer-events-none'} transition-opacity duration-200`}
        aria-hidden={!isOpen}
      >
        {/* Stronger semi-opaque backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/60 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        />

        {/* Opaque slide-in panel that fills small screens */}
        <aside
          className={`fixed top-0 right-0 h-full bg-white shadow-2xl p-6 transform transition-transform duration-250 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-3/4 md:w-80`}
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
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">GroceryIntel</span>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">BETA</span>
              </div>
            </Link>
            <button onClick={closeMenu} aria-label="Close menu"><X className="w-5 h-5" /></button>
          </div>

          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-6 mt-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={createPageUrl(l.to)}
                    onClick={closeMenu}
                    className="block text-slate-900 text-lg font-semibold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://app.groceryintel.com"
                onClick={closeMenu}
                className="block text-center px-4 py-3 bg-emerald-500 text-white rounded-lg font-semibold"
              >
                Get Started
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Navigation;
