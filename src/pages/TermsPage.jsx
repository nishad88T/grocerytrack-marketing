import React from 'react';
import { FileText, Users, CreditCard, AlertTriangle, Shield, Mail, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

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
              <p className="text-slate-600 text-sm mt-1">Last updated: 14 October 2025</p>
            </div>
          </div>
          <div className="text-slate-600 space-y-1">
            <p><strong>Operated by:</strong> GroceryIntel Ltd</p>
            <p><strong>Company No.:</strong> 16838153 (England and Wales)</p>
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
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Welcome to GroceryIntel™. These Terms of Use ("Terms") govern your access to and use of our service. By creating an account and using GroceryIntel™, you agree to be bound by these Terms.
              </p>
              <p>
                Please read these Terms carefully before using our service. If you do not agree with any part of these Terms, you should not use GroceryIntel™.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Service Description</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                GroceryIntel™ is a grocery tracking and analytics platform that helps you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scan and digitize grocery receipts</li>
                <li>Track spending patterns and personal inflation</li>
                <li>Set and monitor budgets</li>
                <li>Analyze nutrition and food quality</li>
                <li>Plan meals and generate shopping lists</li>
                <li>Share household data (Plus plan only)</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the service at any time with reasonable notice.
              </p>
            </div>
          </div>

          {/* Account Registration */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Account Registration</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>To use GroceryIntel™, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete registration information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p>
                You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to maintain account security.
              </p>
            </div>
          </div>

          {/* Subscription Plans */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Subscription Plans & Payment</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                GroceryIntel™ offers two subscription tiers: <strong>Standard</strong> and <strong>Plus</strong>. Both plans provide full access to analytics, insights, nutrition tracking, recipes, and meal planning features. The difference is in scan limits and household sharing:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard:</strong> 12 scans/month, individual use</li>
                <li><strong>Plus:</strong> 30 scans/month, household sharing enabled</li>
              </ul>
              <p>
                Subscriptions are billed monthly or annually. You authorize us to charge your payment method on a recurring basis until you cancel. Prices are subject to change with 30 days' notice.
              </p>
              <p>
                <strong>Refund Policy:</strong> We do not offer refunds for partial subscription periods. If you cancel, you'll retain access until the end of your current billing period.
              </p>
            </div>
          </div>

          {/* Acceptable Use */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Acceptable Use</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, copy, or reverse engineer any part of the service</li>
                <li>Share your account credentials with others (except within authorized household sharing)</li>
                <li>Use the service to transmit spam or unsolicited messages</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
              <p>
                Violation of these terms may result in immediate account suspension or termination without refund.
              </p>
            </div>
          </div>

          {/* User Data & Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">User Data & Content</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                You retain ownership of the data you upload to GroceryIntel™ (receipts, budgets, preferences, etc.). By using our service, you grant us a limited license to process, store, and analyze your data solely to provide the service.
              </p>
              <p>
                We use your data to generate insights, track trends, and improve our service. We will never sell your personal data to third parties. See our <a href="/privacy" className="text-slate-900 hover:underline font-semibold">Privacy Policy</a> for details.
              </p>
              <p>
                You are responsible for ensuring that any data you upload does not violate third-party rights or applicable laws.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Intellectual Property</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                All rights, title, and interest in GroceryIntel™ (including software, design, trademarks, and content) are owned by GroceryIntel Ltd or our licensors. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
              <p>
                The GroceryIntel™ name and logo are trademarks of GroceryIntel Ltd. You may not use our trademarks without prior written consent.
              </p>
            </div>
          </div>

          {/* Disclaimers & Limitations */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Disclaimers & Limitations of Liability</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                <strong>Service "As Is":</strong> GroceryIntel™ is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the service will be error-free, uninterrupted, or meet your specific requirements.
              </p>
              <p>
                <strong>Accuracy:</strong> While we strive for accuracy in receipt scanning and data analysis, we cannot guarantee 100% accuracy. You are responsible for reviewing and verifying all extracted data.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, GroceryIntel Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service in the 12 months preceding the claim.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Termination</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                You may cancel your subscription at any time through your account settings. Your access will continue until the end of your current billing period.
              </p>
              <p>
                We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion. We will provide reasonable notice unless immediate termination is required.
              </p>
              <p>
                Upon termination, your data will be deleted within 30 days unless we are required to retain it by law.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Changes to These Terms</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                We may update these Terms from time to time. Significant changes will be communicated via email or in-app notification at least 30 days in advance. Your continued use of the service after changes take effect constitutes acceptance of the new Terms.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Governing Law & Disputes</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or your use of the service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> <a href="mailto:support@groceryintel.com" className="text-slate-900 hover:underline">support@groceryintel.com</a></li>
                <li><strong>Company:</strong> GroceryIntel Ltd</li>
                <li><strong>Registration:</strong> England and Wales, Company No. 16838153</li>
              </ul>
            </div>
          </div>

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
              <a href="/terms" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Terms of Use
              </a>
              <a href="/privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-slate-600 hover:text-emerald-600 transition-colors">
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
export default TermsPage;
