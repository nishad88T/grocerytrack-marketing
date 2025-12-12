import React from 'react';
import { FileText, Users, CreditCard, AlertTriangle, Shield, Mail, ChefHat, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Use</h1>
              <p className="text-slate-600 text-sm mt-1">Last updated: 07 December 2025</p>
            </div>
          </div>
          <div className="text-slate-600 space-y-1">
            <p><strong>Operated by:</strong> GroceryIntel Ltd, registration no. 16838153</p>
            <p><strong>Registered Office:</strong> 128 City Road London EC1V 2NX United Kingdom</p>
            <p><strong>Contact:</strong> <a href="mailto:support@groceryintel.com" className="text-slate-700 hover:underline">support@groceryintel.com</a></p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 space-y-8">
          
          {/* Introduction */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Welcome to GroceryIntel ("we", "our", or "us"). These Terms of Use govern your access to and use of our application, website, and related services (collectively, the "Service").
              </p>
              <p>
                By using GroceryIntel, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use our Service. These Terms also apply to any future updates or features unless stated otherwise.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">2. Our Values</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                GroceryIntel is built on principles of honesty, transparency, and care for every user. Our goal is to empower families and individuals to make wiser, more mindful financial and food choices. We commit to operating with integrity in all we do. We provide insights based on receipt data you upload, ensuring transparency and user control.
              </p>
            </div>
          </div>

          {/* Eligibility and Account */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">3. Eligibility and Account</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                You must be at least 16 years old to create an account. You are responsible for maintaining your account credentials and ensuring that the information you provide is accurate and complete.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">4. Description of the Service</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                GroceryIntel helps users analyse their grocery spending and nutrition through scanned receipts. The app uses advanced OCR and AI technologies to process receipts, offering insights such as monthly spending, inflation trends, and nutritional summaries. Users review and correct receipt data manually to improve data accuracy.
              </p>
            </div>
          </div>

          {/* Subscription Plans */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">5. Subscription Plans and Payments</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>GroceryIntel offers two plans:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Plan:</strong> £35.99/year or £3.59/month, includes 12 scans/month and full analytics.</li>
                <li><strong>Plus Plan:</strong> £59.99/year or £5.99/month, includes 30 scans/month and household features.</li>
              </ul>
              <p>
                Both plans receive the same analytics and insights with no tier bias.
              </p>
              <p>
                Unused monthly scans do not roll over to the next month. Subscriptions renew automatically unless cancelled before the next billing cycle. You can cancel anytime via your account settings.
              </p>
              <p>
                We do not offer partial refunds for unused scans or mid-cycle cancellations, except where required by law.
              </p>
              <p>
                Payment processing will be handled by a secure third-party provider such as Stripe. GroceryIntel does not directly process or store payment card information.
              </p>
            </div>
          </div>

          {/* Acceptable Use */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">6. Acceptable Use</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload fraudulent, offensive, or illegal receipts or data.</li>
                <li>Attempt to reverse engineer or disrupt the app's operation.</li>
                <li>Share, resell, or misuse analysis results for commercial gain.</li>
                <li>Upload receipts containing sensitive personal data (e.g., payment card details).</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate your account for misuse.
              </p>
            </div>
          </div>

          {/* Data Accuracy and Disclaimers */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">7. Data Accuracy and Disclaimers</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                All analytics are based on user-submitted receipts and OCR outputs. While we aim for accuracy, variations in receipt quality may lead to occasional errors, particularly in identifying shrinkflation or unit sizes.
              </p>
              <p>
                Insights depend on the accuracy of OCR outputs and user review. Users are encouraged to verify and correct scanned data; if data is incorrect, insights will reflect those inaccuracies.
              </p>
              <p>
                <strong>GroceryIntel provides insights for informational purposes only and is not liable for decisions made based on those insights.</strong>
              </p>
            </div>
          </div>

          {/* Recipes and Meal Planning */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">8. Recipes and Meal Planning</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                GroceryIntel may provide access to a curated recipe database and meal planning features ("Recipe Features"). These features are designed to support household meal planning and budgeting. All recipe content is provided for informational and planning purposes only.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 mt-6">8.1 Curated Recipes</h3>
              <p>
                The curated recipe library contains recipes that are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>created by our team,</li>
                <li>adapted or curated from publicly available sources such as TheMealDB and Pepesto, or</li>
                <li>contributed under open licences or with permission where applicable.</li>
              </ul>
              <p>
                Where required or appropriate, GroceryIntel includes source attribution for curated recipes. We do not claim exclusive ownership of recipes originating from external sources, and we make no guarantees about the accuracy, completeness, or suitability of any curated recipe for your dietary needs.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6">8.2 User-Imported or Parsed Recipes</h3>
              <p>
                GroceryIntel allows users to import or parse recipes from external websites or sources ("Imported Recipes") for personal use within their household account. By using this feature, you agree to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Privacy:</strong> Imported Recipes are stored privately within your account (or household, if shared accounts are enabled). They are not published, shared, or made publicly visible by GroceryIntel.</li>
                <li><strong>Ownership:</strong> GroceryIntel does not claim ownership of Imported Recipes. You retain responsibility for any content you import.</li>
                <li><strong>Copyright Responsibility:</strong> You are responsible for ensuring that any recipe you import or upload is used in compliance with copyright laws in your jurisdiction, including restrictions on copying or redistributing copyrighted material.</li>
                <li><strong>No Redistribution:</strong> Imported Recipes must not be submitted for inclusion in the public curated library unless you hold appropriate rights or permissions.</li>
              </ul>
              <p>
                GroceryIntel is not liable for any copyright or legal issues arising from Imported Recipes, including the text, images, or instructions they contain.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6">8.3 Allergen Information</h3>
              <p>
                We may display allergen information based on common ingredients, following UK Food Information Regulations (FIR 2014) and Food Standards Agency (FSA) guidelines. However:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Allergen data may not be complete or exhaustive.</li>
                <li>The 14 major UK allergens (celery, gluten-containing cereals, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, peanuts, sesame seeds, soybeans, sulphur dioxide/sulphites, tree nuts) are flagged only where identifiable.</li>
                <li>You must always check packaging and product labels for accurate allergen information.</li>
                <li>GroceryIntel cannot guarantee the absence of allergens in any recipe or ingredient.</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6">8.4 Disclaimers & Limitations</h3>
              <p>
                All recipe content—whether curated or imported—is provided for informational purposes only. GroceryIntel is not responsible or liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>allergic reactions,</li>
                <li>foodborne illness or adverse health effects,</li>
                <li>inaccuracies in ingredient lists,</li>
                <li>nutritional discrepancies,</li>
                <li>or any outcomes related to food preparation or consumption.</li>
              </ul>
              <p>
                If you have allergies, dietary restrictions, or specific nutritional needs, you must verify ingredient details independently and seek professional advice if necessary.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6">8.5 Nutrition Data</h3>
              <p>
                Nutritional values displayed in the app rely on third-party datasets, estimations, or user-provided inputs. These values may vary based on brand differences, ingredient substitutions, cooking methods, and portion size. Nutrition data is intended as a general guide only.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">9. Intellectual Property</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                All content, features, and technology within GroceryIntel are owned by or licensed to us. Users may use them only for personal, non-commercial purposes.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">10. Limitation of Liability</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                We are not responsible for any indirect, incidental, or consequential damages arising from your use of the Service, except where required by UK law. Nothing in these Terms limits liability for fraud, death, or personal injury caused by negligence, as required under UK law.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">11. Changes to the Terms</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                We may update these Terms periodically. If significant changes occur, we will notify you through the app or by email.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">12. Governing Law</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                These Terms are governed by and interpreted under the laws of the United Kingdom. Any disputes will be handled in UK courts.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">13. Contact</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                For any questions or concerns, please contact us at <a href="mailto:support@groceryintel.com" className="text-slate-900 hover:underline font-semibold">support@groceryintel.com</a> or via the in-app support form.
              </p>
            </div>
          </div>

        </div>

        <LegalFooter />
      </div>
    </div>
  );
};
export default TermsPage;
