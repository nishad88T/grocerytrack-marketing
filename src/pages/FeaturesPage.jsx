import React from 'react';
import { Mail, Camera, Cloud, Shield, Users, ShoppingCart, BookOpen } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <div className="text-slate-700 text-sm">{children}</div>
      </div>
    </div>
  </div>
);

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg mb-4">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Features</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            GroceryIntel™ helps you save time and money — from effortless receipt capture to meal planning and recipe organisation.
          </p>
        </motion.header>

        {/* Email Receipt Processing highlight */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="text-slate-900 font-semibold text-xl mb-2 flex items-center gap-3">
                <Mail className="w-6 h-6 text-emerald-600" />
                Email Receipt Processing
              </div>
              <p className="text-slate-700 text-sm">
                Simply forward receipt photos or online grocery order emails to receipts@groceryintel.com from your registered address. Our AI extracts and processes the data in the background.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard icon={Camera} title="Zero friction">
                  Email from anywhere, anytime — snap a photo and forward it. No app to open.
                </FeatureCard>

                <FeatureCard icon={Cloud} title="Dual-mode">
                  Supports both physical receipt photos and online order emails (Tesco, Sainsbury's, Asda, Ocado and other major UK supermarkets).
                </FeatureCard>

                <FeatureCard icon={Shield} title="Background processing & Secure">
                  Your receipts are processed in the background. We only accept forwarded receipts from registered emails to protect your account.
                </FeatureCard>

                <FeatureCard icon={Users} title="Household & Mobile-first">
                  Each household member can forward receipts to sync spending automatically — perfect for busy families.
                </FeatureCard>

                <FeatureCard icon={ShoppingCart} title="Use Cases">
                  Busy shoppers, online orderers, families sharing receipts, and budget trackers — all benefit from automatic logging.
                </FeatureCard>

                <FeatureCard icon={Mail} title="How to use">
                  Forward one receipt per email to receipts@groceryintel.com from your registered email. We'll take care of the rest.
                </FeatureCard>
              </div>
            </div>
          </div>
        </section>

        {/* Recipes & Meal Planning */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="text-slate-900 font-semibold text-xl mb-2 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                Recipes & Meal Planning
              </div>
              <p className="text-slate-700 text-sm">
                Import recipes from any website, browse curated collections, and build meal plans. Our AI extracts ingredients, instructions, and nutritional data automatically to help you plan and shop.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard icon={BookOpen} title="Import from any site">
                  Paste a recipe URL or forward a recipe email — GroceryIntel extracts ingredients and instructions automatically.
                </FeatureCard>

                <FeatureCard icon={Shield} title="Curated collections">
                  Access hand-picked recipes organised by cuisine, cost, or diet — great starting points for weekly meal planning.
                </FeatureCard>

                <FeatureCard icon={Cloud} title="Auto ingredient extraction">
                  AI detects quantities and ingredients to build shopping lists and estimate costs from your receipts.
                </FeatureCard>

                <FeatureCard icon={Users} title="Plan and organise">
                  Build weekly meal plans, assign recipes to days, and generate consolidated shopping lists for the household.
                </FeatureCard>
              </div>
            </div>
          </div>
        </section>

        {/* Short feature summary / CTA */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Ready to simplify grocery tracking?</h3>
          <p className="text-slate-700 mb-4">Forward receipts, import recipes, and let GroceryIntel fill in the details — all without manual uploads.</p>
          <a
            href="https://app.groceryintel.com"
            className="inline-block px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600"
          >
            Get Started
          </a>
        </section>
      </main>

      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <LegalFooter />
        </div>
      </div>
    </div>
  );
}
