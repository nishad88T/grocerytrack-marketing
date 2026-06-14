import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, CheckCircle, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';
import OnboardingDisclaimerCTA from '@/components/shared/OnboardingDisclaimerCTA';

const Section = ({ icon: Icon, title, children, bgColor = "bg-tangerine-50" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <Card className={`border-none shadow-lg ${bgColor}/80 backdrop-blur-sm`}>
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-tangerine-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* New logo above heading */}
          <div className="flex justify-center mb-4">
            <img
              src="/glyph-orange.png"
              alt="GroceryIntel logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About GroceryIntel™
          </h1>
          <p className="text-lg text-slate-600">
            Empowering smarter grocery decisions, one receipt at a time.
          </p>
        </motion.div>

        {/* From Spreadsheets to Smarter Grocery Habits – custom layout with GI logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="border-none shadow-lg bg-tangerine-50/80 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                {/* GI logo only for this section */}
                <img
                  src="/glyph-orange.png"
                  alt="GroceryIntel logo"
                  className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    From Spreadsheets to Smarter Grocery Habits
                  </h2>
                  <div className="text-slate-700 leading-relaxed space-y-4">
                    <p>
                      As a qualified accountant, I spent years helping businesses understand their finances.
                    </p>
                    <p>
                      But tracking my own grocery spending? Tedious spreadsheets and hours of manual entry.
                    </p>
                    <p>
                      That's when I realized: <strong>groceries are 12–15% of household budgets</strong> — one of the few expenses you can truly control.
                    </p>
                    <div className="bg-tangerine-100 border-l-4 border-tangerine-500 p-4 rounded-r-lg mt-4">
                      <p className="text-tangerine-900 font-medium">
                        GroceryIntel was born to do that — transforming everyday receipts into instant insights, empowering households to save, shop smarter, and make healthier choices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Mission */}
        <Section icon={Target} title="Our Mission" bgColor="bg-teal-50">
          <p className="text-lg font-medium text-slate-800">
            Our mission is to empower households to make data-driven grocery decisions by combining smart planning, intelligent tracking, and predictive insights—turning everyday shopping into a strategy for savings and better living.
          </p>
        </Section>

        {/* Our Philosophy */}
        <Section icon={Users} title="Our Philosophy" bgColor="bg-blue-50">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Full access for all users:</p>
                <p className="text-slate-700">
                  No "Premium" tiers and no locked features. Standard and Plus include exactly the same features — the only difference is your monthly receipt-scan and recipe-import allowances.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Household sharing:</p>
                <p className="text-slate-700">
                  Available on every plan—share receipts, budgets, and insights with your household, then pick the allowance that matches how often you shop.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-tangerine-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Transparent & simple:</p>
                <p className="text-slate-700">Clear pricing, data you own.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Why It Matters */}
        <Section icon={Target} title="Why It Matters" bgColor="bg-purple-50">
          <p>
            Understanding grocery habits gives households control — over spending, waste, and nutrition.
          </p>
          <p className="font-medium text-slate-800 mt-4">
            GroceryIntel isn't just an app; it's a movement to help families spend smarter, save more, and live healthier.
          </p>
        </Section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
