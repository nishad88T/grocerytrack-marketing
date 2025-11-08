import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';

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
      answer: "GroceryIntel™ is a smart grocery tracking app that helps households understand and optimize their grocery spending. By scanning receipts, you get item-level insights, track personal inflation, monitor budgets, and make data-driven shopping decisions."
    },
    {
      question: "How does receipt scanning work?",
      answer: "Simply snap a photo of your grocery receipt (paper or digital) using your phone camera or upload an image. Our AI automatically extracts all items, prices, quantities, and store details. You can review and edit the data if needed before saving."
    },
    {
      question: "What's the difference between Standard and Plus plans?",
      answer: "Both plans offer the exact same powerful analytics, insights, nutrition tracking, recipes, and meal planning features. The only differences are: Standard includes 12 scans/month (perfect for individuals or small households), while Plus includes 30 scans/month and household sharing (ideal for bigger households with more frequent shopping)."
    },
    {
      question: "Can I share my account with family members?",
      answer: "Yes! The Plus plan includes household sharing, allowing multiple family members to scan receipts and view shared insights. Everyone in the household sees the same data and analytics."
    },
    {
      question: "What stores do you support?",
      answer: "GroceryIntel™ works with receipts from any grocery store or supermarket in the UK (Tesco, Sainsbury's, Asda, Aldi, Lidl, Morrisons, Waitrose, Co-op, etc.). Our AI is trained to handle various receipt formats."
    },
    {
      question: "How accurate is the receipt scanning?",
      answer: "Our AI-powered OCR technology is highly accurate, typically achieving 95%+ accuracy on clear receipt images. You always have the opportunity to review and correct any extracted data before it's saved to your account."
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
      question: "Is my data private and secure?",
      answer: "Absolutely. Your data is stored securely and is only used to provide you with insights. We never sell your data to third parties or use it for advertising. You own your data and can export or delete it at any time."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. If you cancel, you'll retain access until the end of your current billing period."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Currently, we don't offer a free trial, but both plans are very affordable (Standard costs less than a cup of coffee!). We believe in transparent pricing and delivering value from day one."
    },
    {
      question: "What if I exceed my monthly scan limit?",
      answer: "If you reach your monthly scan limit (12 for Standard, 30 for Plus), you'll be notified. You can either wait until the next month when your limit resets, or upgrade to the Plus plan for a higher limit."
    },
    {
      question: "How do budgets work?",
      answer: "You can set flexible budgets that align with your actual pay schedule (weekly, monthly, or custom). GroceryIntel™ tracks your spending against these budgets in real-time and provides alerts when you're approaching your limit."
    },
    {
      question: "What are 'meal plans' and 'shopping lists'?",
      answer: "GroceryIntel™ includes curated recipes and meal planning tools. You can plan your weekly meals, and the app will automatically generate a smart shopping list with estimated costs based on your historical receipt data."
    },
    {
      question: "Can I export my data?",
      answer: "Yes! You can export your receipt data, spending history, and insights at any time from your account settings in CSV or JSON format."
    },
    {
      question: "Do you have a mobile app?",
      answer: "GroceryIntel™ is a progressive web app (PWA), which means you can access it from any device's web browser. On mobile devices, you can 'Add to Home Screen' for an app-like experience without needing to download anything from app stores."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards (Visa, Mastercard, Amex) as well as digital wallets. All payments are processed securely through Stripe."
    },
    {
      question: "How do I get support?",
      answer: "You can contact our support team at support@groceryintel.com. We typically respond within 24 hours. There's also a feedback button in the app for quick questions or feature requests."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
          <a href__="mailto:support@groceryintel.com" className="inline-block">
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
          <a href__="https://app.groceryintel.com" className="inline-block">
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
export default FAQsPage;
