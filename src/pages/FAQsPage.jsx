import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQsPage = () => {
  const faqs = [
    {
      question: "What is GroceryIntel™?",
      answer: "GroceryIntel™ is a smart budgeting web app that helps you plan, shop, and track your grocery spending. We provide detailed insights into price changes, spending patterns, and nutritional information—empowering you to make wiser financial and food choices week after week."
    },
    {
      question: "How does GroceryIntel™ work?",
      answer: (
        <>
          <p>GroceryIntel™ follows a continuous improvement cycle to help you manage your grocery spending:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Plan:</strong> Browse curated recipes or import your own from websites. Create meal plans for the week.</li>
            <li><strong>Shop:</strong> Generate smart shopping lists with estimated costs based on your past purchases.</li>
            <li><strong>Track:</strong> Snap photos of receipts in-app, or forward receipt photos and online grocery order emails to receipts@groceryintel.com from your registered email address.</li>
            <li><strong>Analyze:</strong> Our system extracts all item details automatically in the background—no waiting. Once processing completes, review and correct any data, then instantly access analytics on spending, personal inflation, nutrition, and more.</li>
          </ul>
          <p className="mt-3"><strong>Important:</strong> Send one receipt per email for best results. Processing happens in the background, and you'll receive an in-app notification when your receipt is ready for review.</p>
        </>
      )
    },
    {
      question: "How accurate is the receipt scanning?",
      answer: "Our advanced OCR technology is highly accurate. However, receipt quality can vary. We allow you to easily review and correct any scanned data to ensure your insights are always precise."
    },
    {
      question: "How do I import recipes from websites?",
      answer: (
        <>
          <p>Go to Parse Recipe in the menu, paste any recipe URL from your browser, and our recipe parser will extract ingredients, instructions, cooking times, and nutritional info automatically.</p>
          <p className="mt-3"><strong>Legal note:</strong> Imported recipes are stored privately in your account for personal use only. You're responsible for ensuring any recipe you import complies with copyright laws. GroceryIntel does not claim ownership of imported recipes and they are never made publicly visible. See our Terms of Use (Section 8) for full details on recipe usage and copyright responsibilities.</p>
        </>
      )
    },
    {
      question: "How do budgets work?",
      answer: "You can set flexible budgets that align with your actual pay schedule (weekly, monthly, or custom). GroceryIntel™ tracks your spending against these budgets in real-time and provides alerts when you're approaching your limit."
    },
    {
      question: "What kind of insights will I get?",
      answer: "You'll see breakdowns of spending by category and store, personal inflation rates for items you buy regularly, price volatility alerts, budget projections, and nutritional summaries of your purchases. We go beyond just total spending to show you what's really driving your costs."
    },
    {
      question: "What is 'personal inflation tracking'?",
      answer: "Unlike national inflation rates, personal inflation shows how prices change for the specific items YOU buy. GroceryIntel™ tracks price movements for your regular purchases over time, helping you see which items are getting more expensive and by how much."
    },
    {
      question: "Do you track nutrition information?",
      answer: "Yes! GroceryIntel™ links your spending to nutritional data, showing you how much you spend on protein, carbs, healthy vs. processed foods, and more. This helps you balance cost with nutrition quality."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! New users receive a one-month free trial with 4 scans and access to all features. After your trial, both our plans are very affordable—Standard costs less than a cup of coffee! We believe in transparent pricing and delivering value from day one."
    },
    {
      question: "What are the subscription plans?",
      answer: "We offer two plans: Standard (12 scans/month, £35.99/year or £3.59/month) with full analytics and insights, and Plus (30 scans/month, £59.99/year or £5.99/month) with extra capacity. Both plans give you access to all analytics, nutrition insights, recipes, and meal planning. Visit our Pricing page for full details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards (Visa, Mastercard, Amex) as well as digital wallets. All payments are processed securely through Stripe."
    },
    {
      question: "What if I exceed my monthly scan limit?",
      answer: "If you reach your monthly scan limit (12 for Standard, 30 for Plus), you'll be notified. You can either wait until the next month when your limit resets, or upgrade to the Plus plan for a higher limit."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. If you cancel, you'll retain access until the end of your current billing period."
    },
    {
      question: "Can I use GroceryIntel™ with my family/household?",
      answer: "Yes! You can create a household and invite family members using a simple invite code. All household members share the same receipts, budgets, meal plans, and insights. The subscription is managed at the household level - when you subscribe, all household members benefit from the plan's scan allowance."
    },
    {
      question: "How does billing work for households vs individuals?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Individual users (not in a household):</strong> Your personal subscription tier determines your scan limits and features.</li>
            <li><strong>Household members:</strong> The household's subscription tier applies to all members. When a paying member creates or joins a household, their subscription automatically applies to the entire household. Only one subscription is needed per household. If you're using GroceryIntel alone, you can subscribe individually. If you later create or join a household, your subscription seamlessly transfers to benefit everyone.</li>
          </ul>
        </>
      )
    },
    {
      question: "Is my data safe and private?",
      answer: "Yes, absolutely. We prioritize your privacy and data security. We comply with UK GDPR regulations and use industry-standard encryption and security measures. We do not sell, trade, or rent your personal data. Please refer to our Privacy Policy for more details."
    },
    {
      question: "Do you have a mobile app?",
      answer: "GroceryIntel™ is a progressive web app (PWA), which means you can access it from any device's web browser. On mobile devices, you can 'Add to Home Screen' for an app-like experience without needing to download anything from app stores."
    },
    {
      question: "What if I have an issue or feedback?",
      answer: "We're here to help! You can contact us via email at support@groceryintel.com or use the in-app feedback form once you're logged into the application."
    },
    {
      question: "Can I use GroceryIntel™ for business expenses?",
      answer: "GroceryIntel™ is designed and engineered for personal and household grocery spending. While you could technically scan business receipts, our analytics and categorization are geared toward household food and essentials, so it might not be the best fit for detailed business expense tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Everything you need to know about GroceryIntel™
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-xl mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still Have Questions? */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-xl p-8 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white text-lg mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a href="mailto:support@groceryintel.com" className="inline-block">
            <button className="bg-white text-emerald-700 hover:bg-slate-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
              Contact Support
            </button>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-600 mb-6">
            Join thousands of households making smarter grocery decisions.
          </p>
          <a href="https://app.groceryintel.com" className="inline-block">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700">
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
              <a href="/TermsOfUse" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Terms of Use
              </a>
              <a href="/Privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/CookiePolicy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </a>
              <a href="mailto:support@groceryintel.com" className="text-slate-600 hover:text-emerald-600 transition-colors">
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
export default FAQsPage;
