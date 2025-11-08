import React from 'react';
import { Eye, DollarSign, Sprout, Camera, BarChart3, Lightbulb, ShoppingCart, Check } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          GroceryIntel™ – Smarter Grocery Habits Made
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"> Effortless</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-700 font-medium mb-4">
          Empowering households, one receipt at a time.
        </p>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Groceries make up 12–15% of the average household budget — yet most families don't know where that money goes. Prices shift weekly, receipts pile up, and small overspends add up fast.
        </p>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          GroceryIntel™ helps you take back control — not with spreadsheets, but with simple, automated insights that make smarter grocery decisions second nature.
        </p>
        <a href="https://app.groceryintel.com" className="inline-block">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg">
            Get Started →
          </button>
        </a>
      </section>

      {/* Why Track Groceries */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Why Track Groceries?
          </h3>
          <p className="text-xl text-center text-slate-700 mb-12">
            Because groceries are the one expense you can actually control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Eye className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Visibility</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    See exactly what drives your costs — down to the item level.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Smarter Spending</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Spot patterns and opportunities to make more informed choices — no guesswork, just clarity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Sprout className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Better Living</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Connect your grocery spend to nutrition and food quality — for smarter, more informed shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How GroceryIntel Helps */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6">
            How GroceryIntel™ Helps
          </h3>
          <p className="text-lg text-center text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Built by an accountant who got tired of spreadsheets, GroceryIntel™ turns everyday receipts into professional-grade insights:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Camera className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Scan any grocery receipt</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Paper or digital — we handle it all.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Analyse trends</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Across items, stores, and prices over time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Act on personalized insights</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Shop smarter and save more with actionable recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Different */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-6">
            What Makes GroceryIntel™ Different
          </h3>
          <p className="text-lg text-center text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            GroceryIntel™ goes beyond budgeting apps. Instead of just telling you <strong>"You spent £400 on groceries,"</strong> it shows what's driving those costs — item by item, store by store, over time.
          </p>
          <div className="text-center">
            <a href="/features">
              <button className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Plans & Pricing
          </h3>
          <p className="text-xl text-center text-slate-700 mb-2">
            Same insights. Just sized for your household.
          </p>
          <p className="text-center text-slate-600 mb-12 italic">
            Standard is cheaper than the average cup of coffee in the UK.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Standard */}
            <div className="border-2 border-slate-200 hover:border-emerald-500 transition-colors rounded-lg p-6 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-3xl">☕</div>
                <h4 className="text-2xl font-bold">Standard</h4>
              </div>
              <p className="text-slate-600 mb-4">Individuals / small households</p>
              
              <p className="text-3xl font-bold text-slate-900 mb-2">£35.99<span className="text-lg font-normal text-slate-600">/year</span></p>
              <p className="text-slate-600 mb-2">or £3.59/month</p>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Save 16% annually
              </div>
              <p className="text-sm text-slate-500 italic mb-4">
                Less than the cost of a coffee — for smarter shopping.
              </p>
              
              <div className="pt-4 border-t">
                <p className="font-semibold text-slate-900 mb-3">What You Get:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Full analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">12 scans/month</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plus */}
            <div className="border-2 border-emerald-500 shadow-lg relative rounded-lg p-6 bg-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-3xl">👨👩👧👦</div>
                <h4 className="text-2xl font-bold">Plus</h4>
              </div>
              <p className="text-slate-600 mb-4">Shared or growing households</p>
              
              <p className="text-3xl font-bold text-slate-900 mb-2">£59.99<span className="text-lg font-normal text-slate-600">/year</span></p>
              <p className="text-slate-600 mb-2">or £5.99/month</p>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Save 17% annually
              </div>
              
              <div className="pt-4 border-t">
                <p className="font-semibold text-slate-900 mb-3">What You Get:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Full analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">30 scans/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Household sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-700 text-lg">
              🎯 No locked features. No confusing tiers. Just the same mission, sized for your household.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🚀 Join the Movement
          </h3>
          <p className="text-xl text-white mb-8">
            Start tracking, learning, and saving — one receipt at a time.
          </p>
          <a href="https://app.groceryintel.com" className="inline-block">
            <button className="bg-white text-emerald-700 hover:bg-slate-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg">
              Get Started →
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


