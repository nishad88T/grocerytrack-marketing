import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import OnboardingDisclaimerCTA from '@/components/shared/OnboardingDisclaimerCTA';
import LegalFooter from '@/components/shared/LegalFooter';

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
          <ChevronUp className="w-5 h-5 text-tangerine-600 flex-shrink-0" />
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
      question: "What is GroceryIntel?",
      answer: "GroceryIntel is a smart budgeting web app that helps you plan, track, and understand your grocery spending.\n\nIt uses scanned receipts and user-reviewed data to provide insights into price changes, spending patterns, and nutritional information—helping households build awareness and make more informed grocery decisions over time."
    },
    {
      question: "How does GroceryIntel work?",
      answer: (
        <>
          <p>GroceryIntel follows a continuous improvement cycle to help you manage your grocery spending:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Plan:</strong> Browse curated recipes or import your own from websites. Create meal plans for the week.</li>
            <li><strong>Shop:</strong> Generate smart shopping lists with estimated costs based on your past purchases.</li>
            <li><strong>Track:</strong> Snap photos of receipts in-app, or share them straight from your photo gallery.</li>
            <li><strong>Analyze:</strong> Our system extracts all item details automatically in the background—no waiting. Once processing completes, review and correct any data, then instantly access analytics on spending, price changes, basket composition, and more.</li>
          </ul>
          <p className="mt-3"><strong>Important:</strong> For best results, capture one receipt at a time. Processing happens in the background, and you'll receive an in-app notification when your receipt is ready for review.</p>
        </>
      )
    },
    {
      question: "How accurate is the receipt scanning?",
      answer: "Our advanced OCR technology is highly accurate. However, receipt quality can vary. We allow you to easily review and correct any scanned data to ensure your insights are always precise."
    },
    {
      question: "How do I import recipes?",
      answer: (
        <>
          <p>Go to Parse Recipe in the menu and paste a recipe link from a website or video. Our parser pulls out the ingredient list to help you build a shopping list.</p>
          <p className="mt-3"><strong>Legal note:</strong> Imported recipes are stored privately in your account for personal use only. You're responsible for ensuring any recipe you import complies with copyright laws. GroceryIntel does not claim ownership of imported recipes and they are never made publicly visible. See our Terms of Use (Section 8) for full details on recipe usage and copyright responsibilities.</p>
        </>
      )
    },
    {
      question: "How do budgets work?",
      answer: "You can set flexible budgets that align with your actual pay schedule (weekly, monthly, or custom). GroceryIntel tracks your spending against these budgets in real-time and provides alerts when you're approaching your limit."
    },
    {
      question: "What kind of insights will I get?",
      answer: "You'll see breakdowns of spending by category and store, Price Watch alerts when items you buy regularly change sharply in price, budget projections, and a high-level Basket Vibe breakdown of your purchases. We go beyond just total spending to show you what's really driving your costs."
    },
    {
      question: "What is Price Watch?",
      answer: "Price Watch flags when prices for the specific items you buy regularly move sharply, so you can quickly see which items are getting more expensive over time and by how much."
    },
    {
      question: "Do you analyse what's in my basket?",
      answer: "Yes — through Basket Vibe, a high-level breakdown of your spend across whole, starchy, and processed foods. It's an estimate based on general food categories, not a precise scientific calculation, designed to give you an overview of your habits so you can make more mindful decisions."
    },
    {
      question: "Do you offer a free trial?",
      answer: "The app is coming soon. We plan to offer a 14-day full Standard tier trial when access opens, so you can explore GroceryIntel before choosing a plan."
    },
    {
      question: "What are the subscription plans?",
      answer: "We offer two plans: Standard (12 receipt scans and 45 recipe imports per month, £35.99/year or £3.59/month) and Plus (30 receipt scans and 90 recipe imports per month, £59.99/year or £5.99/month). Both plans include exactly the same features — analytics, Basket Vibe, Price Watch, recipes & meal planning, video & web recipe imports, and household sharing. The only difference is your monthly receipt-scan and recipe-import allowances. Visit our Pricing page for full details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Payments are not open while the app is coming soon. When paid plans launch, we expect to support major credit and debit cards and digital wallets through secure Stripe processing."
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
      question: "Can I use GroceryIntel with my family/household?",
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
      answer: "The GroceryIntel app experience is coming soon. We're preparing web access first, with native Apple App Store and Google Play apps planned after launch."
    },
    {
      question: "What if I have an issue or feedback?",
      answer: (
        <>
          <p>We're here to help! While the app is being prepared, you can contact us via email at support@groceryintel.com.</p>
          <p className="mt-3">
            You can also follow us for updates on new features and launch news:
            {" "}
            <a href="https://www.instagram.com/groceryintel/?hl=en" target="_blank" rel="noopener noreferrer" className="text-tangerine-700 hover:text-tangerine-800 underline">Instagram</a>,
            {" "}
            <a href="https://www.youtube.com/@GroceryIntel" target="_blank" rel="noopener noreferrer" className="text-tangerine-700 hover:text-tangerine-800 underline">YouTube</a>,
            {" "}
            <a href="https://www.linkedin.com/company/groceryintel/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-tangerine-700 hover:text-tangerine-800 underline">LinkedIn</a>.
          </p>
        </>
      )
    },
    {
      question: "Can I use GroceryIntel for business expenses?",
      answer: "GroceryIntel is designed and engineered for personal and household grocery spending. While you could technically scan business receipts, our analytics and categorization are geared toward household food and essentials, so it might not be the best fit for detailed business expense tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-tangerine-500 rounded-xl shadow-lg mb-4">
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
        <div className="bg-tangerine-500 rounded-xl shadow-xl p-8 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white text-lg mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a href="mailto:support@groceryintel.com" className="inline-block">
            <button className="bg-white text-tangerine-700 hover:bg-slate-100 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
              Contact Support
            </button>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Want early access?
          </h3>
          <p className="text-slate-600 mb-6">
            The GroceryIntel app is coming soon. Join the waitlist and we’ll let you know when early access opens.
          </p>
          <OnboardingDisclaimerCTA
            label="Join the waitlist"
            className="bg-tangerine-500 hover:bg-tangerine-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg"
            size="lg"
          />
        </div>

        {/* Footer */}
        <LegalFooter />
      </div>
    </div>
  );
};
export default FAQsPage;
