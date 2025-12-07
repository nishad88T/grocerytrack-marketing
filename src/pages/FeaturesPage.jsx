import React from 'react';
import { Mail, Camera, Cloud, Shield, Users, ShoppingCart, BookOpen } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    </div>
    <div className="text-slate-600 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Powerful Features for Smarter Grocery Management
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From email receipt processing to curated recipes, GroceryIntel™ gives you everything you need to take control of your grocery spending.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Email Receipt Processing - Highlighted Feature */}
          <FeatureCard icon={Mail} title="Email Receipt Processing">
            <p className="font-semibold text-emerald-700 mb-3">
              Effortlessly track receipts by forwarding them directly to your account.
            </p>
            <p className="mb-3">
              Skip the manual scanning! Simply forward your email receipts from any grocery store to your unique forwarding address.
            </p>
            <p className="mb-3">
              Our advanced AI automatically extracts itemized data, categorizes purchases, and updates your spending insights in real-time.
            </p>
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-sm font-medium text-slate-700">
                <strong>How to use:</strong> Find your unique forwarding address in <span className="text-emerald-700 font-semibold">Account → Forwarding</span> and set up auto-forwarding in your email app.
              </p>
            </div>
          </FeatureCard>

          {/* Recipes & Meal Planning - Highlighted Feature */}
          <FeatureCard icon={BookOpen} title="Recipes & Meal Planning">
            <p className="font-semibold text-emerald-700 mb-3">
              Plan your week with curated recipes that fit your budget and lifestyle.
            </p>
            <p className="mb-3">
              Browse a growing collection of nutritious, budget-friendly recipes designed to reduce waste and maximize value.
            </p>
            <p className="mb-3">
              Build weekly meal plans, generate smart shopping lists with estimated costs based on your past purchases, and stay organized from planning to checkout.
            </p>
            <p className="text-sm text-slate-500 italic mt-4">
              Perfect for families looking to eat healthier while keeping grocery costs under control.
            </p>
          </FeatureCard>

          {/* Receipt Scanning */}
          <FeatureCard icon={Camera} title="Photo Receipt Scanning">
            <p className="mb-3">
              Prefer taking photos? Snap a picture of any paper receipt and get instant, itemized breakdowns.
            </p>
            <p className="mb-3">
              Our OCR technology accurately captures every item, price, and category—even from crumpled receipts.
            </p>
            <p className="text-sm text-slate-500 italic">
              Works with receipts from any grocery store or supermarket.
            </p>
          </FeatureCard>

          {/* Cloud Sync */}
          <FeatureCard icon={Cloud} title="Cloud Sync & Backup">
            <p className="mb-3">
              All your data is securely stored in the cloud and automatically synced across all your devices.
            </p>
            <p className="mb-3">
              Access your receipts, meal plans, and insights anytime, anywhere—from your phone, tablet, or computer.
            </p>
            <p className="text-sm text-slate-500 italic">
              Never lose track of your grocery data again.
            </p>
          </FeatureCard>

          {/* Security & Privacy */}
          <FeatureCard icon={Shield} title="Security & Privacy First">
            <p className="mb-3">
              Your financial and personal data is protected with bank-level encryption and strict privacy controls.
            </p>
            <p className="mb-3">
              We never sell your data, and you have full control over what information is stored and shared.
            </p>
            <p className="text-sm text-slate-500 italic">
              Your privacy is our top priority.
            </p>
          </FeatureCard>

          {/* Household Sharing */}
          <FeatureCard icon={Users} title="Household Sharing">
            <p className="mb-3">
              Share grocery insights and budgets with your family or household members for complete visibility.
            </p>
            <p className="mb-3">
              Collaborate on meal plans, sync shopping lists, and track spending together to meet shared financial goals.
            </p>
            <p className="text-sm text-slate-500 italic">
              Perfect for families managing grocery budgets together.
            </p>
          </FeatureCard>

          {/* Smart Shopping Lists */}
          <FeatureCard icon={ShoppingCart} title="Smart Shopping Lists">
            <p className="mb-3">
              Auto-generate shopping lists from your meal plans with estimated costs based on your purchase history.
            </p>
            <p className="mb-3">
              Stay on budget before you even walk into the store—see price estimates and get alerts when items have gone up in cost.
            </p>
            <p className="text-sm text-slate-500 italic">
              Shop smarter, not harder.
            </p>
          </FeatureCard>

        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Grocery Shopping?
            </h2>
            <p className="text-emerald-50 mb-6 text-lg">
              Join GroceryIntel™ today and start making smarter, more informed grocery decisions.
            </p>
            <a
              href="https://app.groceryintel.com"
              className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Get Started Now →
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <LegalFooter />
      </div>
    </div>
  );
}
