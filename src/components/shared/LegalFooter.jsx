import React from 'react';
import { Link } from 'react-router-dom';

export default function LegalFooter() {
  return (
    <footer className="mt-16 pt-8 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img
            src="/gi-logo-2.png"
            alt="GroceryIntel logo"
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-slate-700 font-semibold">GroceryIntel™</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
          <Link to="/TermsOfUse" className="text-slate-600 hover:text-emerald-600 transition-colors">
            Terms of Use
          </Link>
          <Link to="/Privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/CookiePolicy" className="text-slate-600 hover:text-emerald-600 transition-colors">
            Cookie Policy
          </Link>
          <a href="mailto:support@groceryintel.com" className="text-slate-600 hover:text-emerald-600 transition-colors">
            Contact Support
          </a>
        </div>
      </div>

      {/* Legal text */}
      <div className="text-center text-xs text-slate-500 mt-6">
        <p>GroceryIntel Ltd · Registered in England and Wales · Company No. 16838153</p>
        <p className="mt-2">© 2025 GroceryIntel™. All rights reserved.</p>
      </div>
    </footer>
  );
}
