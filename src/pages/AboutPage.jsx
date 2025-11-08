import React from 'react';
import { BookOpen, Heart, Target, Users, Lightbulb, ShoppingCart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About GroceryIntel™</h1>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your partner in smarter grocery spending and healthier living.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              GroceryIntel™ was born from a simple frustration: grocery shopping felt like a financial black hole. 
              You'd load up the trolley, scan the receipt, and wonder where all that money went.
            </p>
            <p>
              Traditional budgeting apps would tell you "You spent £400 on groceries this month" — but they couldn't 
              tell you <strong>why</strong>, <strong>what</strong> you bought, or <strong>how</strong> to improve. 
              That's where we come in.
            </p>
            <p>
              Built by an accountant who got tired of spreadsheets, GroceryIntel™ transforms every receipt into 
              actionable insights. We help families understand their grocery spending at the item level, track 
              personal inflation, and make smarter choices — all without the hassle.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              To empower households to take control of their grocery spending through transparency, insights, 
              and smarter decision-making.
            </p>
            <p>
              Groceries make up 12–15% of the average household budget — one of the few expenses you can actually 
              control. We believe every family deserves to know where that money goes, how prices change over time, 
              and what small adjustments can lead to big savings.
            </p>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Philosophy</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              <strong>Honesty first.</strong> We don't hide behind complex pricing or locked features. 
              Standard and Plus users get the same powerful insights — just sized for different household needs.
            </p>
            <p>
              <strong>Privacy matters.</strong> Your data is yours. We use it only to give you better insights, 
              never to sell ads or share with third parties.
            </p>
            <p>
              <strong>Simplicity wins.</strong> We believe good tools should make life easier, not harder. 
              That's why we automate the tedious parts (scanning, categorizing, analyzing) so you can focus 
              on what matters: making better choices.
            </p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Who We Serve</h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              GroceryIntel™ is for anyone who wants to be more intentional about their grocery spending:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Families</strong> trying to stretch their budget further without sacrificing quality</li>
              <li><strong>Individuals</strong> wanting to understand where their money goes each month</li>
              <li><strong>Health-conscious shoppers</strong> looking to balance nutrition with cost</li>
              <li><strong>Households</strong> dealing with rising food prices and inflation</li>
              <li><strong>Anyone</strong> tired of guesswork and ready for data-driven grocery decisions</li>
            </ul>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Take Control?
          </h3>
          <p className="text-white text-lg mb-6">
            Join thousands of households making smarter grocery decisions.
          </p>
          <a href__="https://app.groceryintel.com" className="inline-block">
            <button className="bg-white text-emerald-700 hover:bg-slate-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
              Get Started Today →
            </button>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-700 font-semibold">GroceryIntel™</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href__="/terms" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Terms of Use
              </a>
              <a href__="/privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </a>
              <a href__="/cookie-policy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </a>
              <a href__="mailto:support@groceryintel.com" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
          
          <div className="text-center text-xs text-slate-500 mt-6">
            <p>GroceryIntel Ltd · Registered in England and Wales · Company No. 16838153</p>
            <p className="mt-2">© 2025 GroceryIntel™. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
