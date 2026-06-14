import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';
import OnboardingDisclaimerCTA from '@/components/shared/OnboardingDisclaimerCTA';
import BetaDiscountBanner from '@/components/shared/BetaDiscountBanner';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <BetaDiscountBanner />
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-tangerine-500 rounded-xl shadow-lg mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Flexible Plans, Powerful Insights
          </h1>
          <p className="text-xl text-slate-700 mb-2">
            Choose the right fit for your household. Same powerful insights,
          </p>
          <p className="text-xl text-slate-700">
            just sized for your scanning needs.
          </p>
          <p className="text-base text-slate-700 mt-4">
            The GroceryIntel app is coming soon. Join the waitlist for launch updates, onboarding details, and a 14-day full Standard tier trial when early access opens.
          </p>
          <p className="text-slate-600 mt-4 italic">
            At GroceryIntel™, we believe everyone deserves full financial clarity over their groceries. That's why both our plans include exactly the same features. The only difference is your monthly receipt-scan and recipe-import allowances.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Standard Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2 border-slate-200 hover:border-tangerine-500 transition-colors relative">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl">☕</div>
                  <CardTitle className="text-2xl">Standard</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Individuals / small households
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-slate-900">
                    £35.99<span className="text-lg font-normal text-slate-600">/year</span>
                  </p>
                  <p className="text-slate-600">or £3.59/month</p>
                  <div className="inline-block bg-tangerine-100 text-tangerine-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save 16% annually
                  </div>
                  <p className="text-sm text-slate-500 italic">
                    Less than the cost of a coffee — for smarter shopping.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-slate-900 mb-3">What You Get:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Spending analytics & insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Basket Vibe (food-category breakdown)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Price Watch (price-change alerts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Recipes & Meal Planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Video & web recipe imports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Shopping List Generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Household sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold">12 receipt scans / month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold">45 recipe imports / month</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-4 italic">
                    Perfect for smaller households with less frequent shopping trips.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Plus Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2 border-slate-200 hover:border-tangerine-500 transition-colors relative">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl">👨👩👧👦</div>
                  <CardTitle className="text-2xl">Plus</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Shared or growing households
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-slate-900">
                    £59.99<span className="text-lg font-normal text-slate-600">/year</span>
                  </p>
                  <p className="text-slate-600">or £5.99/month</p>
                  <div className="inline-block bg-tangerine-100 text-tangerine-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save 17% annually
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-slate-900 mb-3">What You Get:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Spending analytics & insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Basket Vibe (food-category breakdown)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Price Watch (price-change alerts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Recipes & Meal Planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Video & web recipe imports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Shopping List Generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Household sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold">30 receipt scans / month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold">90 recipe imports / month</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-4 italic">
                    Ideal for bigger households with more frequent shopping and more receipts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <p className="text-xs text-slate-500 italic text-center -mt-6 mb-12">
          * Early access pricing and launch offers will be announced closer to release.
        </p>

        {/* No Tier Bias Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-slate-700 text-lg leading-relaxed">
                🎯 No locked features. No confusing tiers. Both plans include the same features — the only difference is your monthly receipt-scan and recipe-import allowances, sized to how often you shop. Smaller households tend to fit Standard; busier households with more receipts tend to prefer Plus.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <OnboardingDisclaimerCTA
            label="Join the waitlist"
            size="lg"
            className="bg-tangerine-500 hover:bg-tangerine-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
          />
        </motion.div>

        {/* Footer */}
        <div className="mt-16">
          <LegalFooter />
        </div>
      </div>
    </div>
  );
}


