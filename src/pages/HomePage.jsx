import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { createPageUrl } from "@/utils";
import {
  ShoppingCart,
  ScanLine,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Check
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/shared/Navigation";
import LegalFooter from "@/components/shared/LegalFooter";

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <div>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const refCode = params.get("ref");
    if (refCode) {
      try {
        sessionStorage.setItem("referralCode", refCode);
      } catch (e) {
        // ignore storage errors
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Shared header/navigation */}
      <Navigation />

      {/* Hero */}
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg mb-6">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Makes GroceryIntel™ Different</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              GroceryIntel™ goes beyond budgeting apps. Instead of just telling you "You spent £400 on groceries," it shows what's driving those costs — item by item, store by store, over time.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-700 hover:bg-slate-100 shadow-lg px-8 py-4 text-lg font-semibold"
            >
              <a href="https://app.groceryintel.com">Get Started →</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">Powerful, simple features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Feature
                icon={ScanLine}
                title="Scan any receipt"
                description="Paper or digital receipts — scan and digitize instantly."
              />
              <Feature
                icon={BarChart3}
                title="Analyse trends"
                description="Track spending by item, store and time to find savings."
              />
              <Feature
                icon={Lightbulb}
                title="Actionable insights"
                description="Personalised tips and shopping lists that help you save."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans / Pricing CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Plans & Pricing</h3>
            <p className="text-slate-600 mb-6">Same insights. Just sized for your household.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-slate-200 hover:border-emerald-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Standard</CardTitle>
                  <CardDescription>Individuals / small households</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-900">£35.99 <span className="text-lg font-normal text-slate-600">/year</span></p>
                  <p className="text-slate-600">or £3.59/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Full analytics & insights</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 12 scans/month</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Plus</CardTitle>
                  <CardDescription>Shared or growing households</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-900">£59.99 <span className="text-lg font-normal text-slate-600">/year</span></p>
                  <p className="text-slate-600">or £5.99/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Full analytics & insights</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 30 scans/month & household sharing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold"
            >
              <a href="https://app.groceryintel.com">Get Started Today →</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-6">
          <LegalFooter />
        </div>
      </div>
    </div>
  );
}
