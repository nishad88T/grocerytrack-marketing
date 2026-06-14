import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/glyph-orange.png" alt="GroceryIntel" className="w-8 h-8" />
              <span className="font-bold text-lg">GroceryIntel</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Smart grocery tracking, budgeting, and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/features" className="hover:text-tangerine-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-tangerine-400 transition-colors">Pricing</Link></li>
              <li><Link to="/faqs" className="hover:text-tangerine-400 transition-colors">FAQs</Link></li>
              <li><Link to="/about" className="hover:text-tangerine-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/Privacy" className="hover:text-tangerine-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/TermsOfUse" className="hover:text-tangerine-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="/CookiePolicy" className="hover:text-tangerine-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-slate-400 text-sm">
              Email: <a href="mailto:support@groceryintel.com" className="hover:text-tangerine-400 transition-colors">support@groceryintel.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-xs text-slate-400">
          <p>GroceryIntel Ltd · Registered in England and Wales · Company No. 16838153</p>
          <p className="mt-2">© 2026 GroceryIntel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
