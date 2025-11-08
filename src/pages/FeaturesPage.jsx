import React from 'react';
import { Sparkles, ScanLine, TrendingUp, PiggyBank, Calendar, HeartPulse, Users, ChefHat, ShoppingCart } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why GroceryIntel™
          </h1>
          <p className="text-xl text-slate-700">
            The complete grocery improvement cycle: plan meals, shop smarter, track spending, and improve week by week.
          </p>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">What You Get</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Planning */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <ChefHat className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Recipes & Meal Planning</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Plan meals with curated recipes and organize your week.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <Calendar className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Shopping List Generator</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Auto-create smart shopping lists with estimated costs based on your past receipts.
                </p>
              </div>
            </div>
            
            {/* Shopping/Tracking */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <ScanLine className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Effortless Receipt Scanning</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Snap any grocery receipt, get an instant, itemised breakdown.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <PiggyBank className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Flexible Budget Tracking</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Set budgets that align with your actual pay schedule and track spending effortlessly.
                </p>
              </div>
            </div>
            
            {/* Insights */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <TrendingUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Personal Inflation Tracking</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  See how your basket's prices evolve over time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Smart Financial Insights</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Identify rising costs, better store options, and smarter swaps.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <HeartPulse className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Nutrition Meets Value</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Link spending patterns with the nutritional quality of your food.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <Users className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Household Sharing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sync spending and insights across your family for complete visibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-16">
          <div className="border-none shadow-xl bg-emerald-50/80 backdrop-blur-sm rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why It Matters</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Groceries make up roughly <strong>12–15% of household budgets</strong> — one of the few expenses you can truly control.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mt-4">
              Small, consistent changes (<strong>10–15% improvement</strong>) can save hundreds each year, reduce waste, and promote healthier eating habits.
            </p>
          </div>
        </div>

        {/* Reframed Comparison */}
        <div className="mb-12">
          <div className="border-none shadow-xl bg-white/80 backdrop-blur-sm rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Where Budget Apps Stop, GroceryIntel™ Continues
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Budgeting apps are a great starting point for building financial awareness. GroceryIntel™ simply goes further — focusing on groceries, the one area families can actively control, optimise, and improve week by week.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 text-slate-700 font-semibold">Traditional Budgeting Apps</th>
                    <th className="text-left py-4 px-4 text-emerald-700 font-semibold">GroceryIntel™</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4 px-4 text-slate-600">
                      Often show only total grocery spend
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      Breaks down every receipt into item-level insights and trends
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-600">
                      Usually requires manual categorisation
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      Automatic, accurate receipt scanning with itemised classification
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-600">
                      Uses broad or generic spending categories
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      Clear grocery-specific categories for meaningful insight
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-600">
                      Limited visibility into price changes
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      Track your personal inflation and item-level price movement over time
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-600">
                      Doesn't link cost with nutrition or value
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      Connects spend with nutritional impact to support smarter choices
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-600">
                      Helps manage a monthly budget overall
                    </td>
                    <td className="py-4 px-4 text-slate-800">
                      <strong>Adds the full grocery improvement cycle:</strong> plan meals, choose recipes, auto-create shopping lists with estimated costs, then track actual spend with receipt uploads
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-700 text-center leading-relaxed">
                <strong>In short:</strong> Traditional budgeting apps help you understand your money. GroceryIntel™ helps you <em>improve</em> it — turning everyday grocery shopping into smarter financial and lifestyle decisions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href__="https://app.groceryintel.com" className="inline-block">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700">
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
export default FeaturesPage;
