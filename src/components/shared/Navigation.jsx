import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { createPageUrl } from '@/utils';
import OnboardingDisclaimerCTA from './OnboardingDisclaimerCTA';

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
        {/* Logo + Title + Tagline + BETA */}
        <Link
          to={createPageUrl('/')}
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <img
            src="/gi-logo-2.png"
            alt="GroceryIntel logo"
            className="h-9 w-9 md:h-11 md:w-11 rounded-2xl"
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-semibold text-lg md:text-xl">
                GroceryIntel™
              </span>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs md:text-sm font-semibold px-2 py-1 rounded-full">
                BETA
              </span>
            </div>
            <span className="text-xs md:text-sm font-medium text-emerald-500 tracking-tight">
              Track Smarter. Spend Better.
            </span>
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
          <OnboardingDisclaimerCTA
            label="Get Started"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-sm font-medium"
            size="lg"
            onTrigger={closeMenu}
          />
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
        className={`fixed inset-0 z-[1200] ${
          isOpen ? 'block' : 'pointer-events-none'
        } transition-opacity duration-200`}
        aria-hidden={!isOpen}
      >
        {/* Stronger semi-opaque backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/60 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-200`}
        />

        {/* Opaque slide-in panel that fills small screens */}
        <aside
          className={`fixed top-0 right-0 h-full bg-white shadow-2xl p-6 transform transition-transform duration-250 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } w-full sm:w-3/4 md:w-80`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <Link
              to={createPageUrl('/')}
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <img
                src="/gi-logo-2.png"
                alt="GroceryIntel logo"
                className="h-8 w-8 rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">
                    GroceryIntel™
                  </span>
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">
                    BETA
                  </span>
                </div>
                <span className="text-[11px] font-medium text-emerald-500 tracking-tight">
                  Track Smarter. Spend Better.
                </span>
              </div>
            </Link>
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
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
              <OnboardingDisclaimerCTA
                label="Get Started"
                className="w-full px-4 py-3 bg-emerald-500 text-white rounded-lg font-semibold"
                size="lg"
                onTrigger={closeMenu}
              />
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Navigation;
