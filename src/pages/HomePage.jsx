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
  Check,
  Wallet
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
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo above heading */}
            <div className="flex justify-center mb-6">
              <img
                src="/gi-logo-2.png"
                alt="GroceryIntel logo"
                className="h-20 w-20 md:h-24 md:w-24 rounded-2xl shadow-lg"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              All-in-one grocery planning, tracking, and insights
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              GroceryIntel™ combines recipes, meal planning, shopping lists, and effortless receipt scanning so you can
              control grocery spend without adding extra work—including budgets that start on your payday, not the
              calendar month.
            </p>

            {/* Tagline in green */}
            <p className="text-lg font-semibold text-emerald-500 mb-8">
              Track Smarter. Spend Better. Eat Well.
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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
              Built to make grocery savings effortless
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Feature
                icon={ShoppingCart}
                title="Plan and shop in one place"
                description="Curated and user-imported recipes feed straight into meal plans and smart shopping lists with cost estimates from your past receipts."
              />
              <Feature
                icon={ScanLine}
                title="Frictionless tracking"
                description="Snap paper receipts, forward digital ones, or upload later. Our smart receipt parser handles the details in the background so you never slow down at checkout."
              />
              <Feature
                icon={BarChart3}
                title="Analytics that guide you"
                description="See price inflation, category spend, and store comparisons. Spot high-impact swaps to keep your basket on budget and on track."
              />
              <Feature
                icon={Lightbulb}
                title="Habit-forming convenience"
                description="Forward an email, drop a photo, and come back whenever you like. GroceryIntel™ keeps processing and reminds you where to focus, not where you slipped."
              />
              <Feature
                icon={Wallet}
                title="Payday-aligned budgeting"
                description="Start budgets on the day you get paid instead of the first of the month, so your grocery tracking and limits match how cash actually hits your account."
              />
              <Feature
                icon={TrendingUp}
                title="Nutrition meets value"
                description="Pair spending data with nutritional breakdowns to balance cost and quality for every shop."
              />
              <Feature
                icon={Check}
                title="Proven weekly wins"
                description="Track savings by category over time and celebrate the small improvements that compound into hundreds saved each year."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
              Low-friction from idea to insight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card className="border-emerald-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">1. Plan meals effortlessly</CardTitle>
                  <CardDescription>
                    Pick from curated recipes or paste any link. GroceryIntel™ extracts ingredients, instructions, and nutrition automatically.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-emerald-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">2. Shop with clarity</CardTitle>
                  <CardDescription>
                    Auto-generate shopping lists with quantities and estimated costs based on your past spend and preferred stores.
                  </CardDescription>
                </CardHeader>
              </Card>
                <Card className="border-emerald-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">3. Track without slowing down</CardTitle>
                    <CardDescription>
                      Scan or forward receipts, including standard photos and email receipts. Automated processing runs in the background so you can get on with your day, with budgets that align to your payday instead of the calendar.
                    </CardDescription>
                  </CardHeader>
                </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans / Pricing CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Plans & Pricing
            </h3>
            <p className="text-slate-600 mb-6">
              Same insights. Just sized for your household.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-slate-200 hover:border-emerald-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Standard</CardTitle>
                  <CardDescription>Individuals / small households</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-900">
                    £35.99{" "}
                    <span className="text-lg font-normal text-slate-600">
                      /year
                    </span>
                  </p>
                  <p className="text-slate-600">or £3.59/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />{" "}
                      Full analytics & insights
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />{" "}
                      12 scans/month
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Plus</CardTitle>
                  <CardDescription>Shared or growing households</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-900">
                    £59.99{" "}
                    <span className="text-lg font-normal text-slate-600">
                      /year
                    </span>
                  </p>
                  <p className="text-slate-600">or £5.99/month</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />{" "}
                      Full analytics & insights
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />{" "}
                      30 scans/month & household sharing
                    </li>
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
