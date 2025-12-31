import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-slate-600 text-sm mt-1">Last updated: 18 December 2025</p>
            </div>
          </div>
          <div className="text-slate-600 space-y-1">
            <p><strong>Operated by:</strong> GroceryIntel Ltd</p>
            <p><strong>Company registration number:</strong> 16838153</p>
            <p><strong>ICO registration reference:</strong> ZC066318</p>
            <div className="mt-4">
              <p><strong>Registered Office:</strong></p>
              <p>128 City Road, London, EC1V 2NX, United Kingdom</p>
            </div>
            <p className="mt-4"><strong>Contact:</strong> <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a></p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 space-y-8">
          {/* 1. Overview */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">1. Overview</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                This Privacy Policy explains how GroceryIntel (“we”, “our”, or “us”) collects, uses, stores, and protects personal data when you use our application, website, and related services (the “Service”).
              </p>
              <p>
                GroceryIntel is currently offered as a Beta service. Features, data processing methods, and insights may evolve as we continue to improve the product.
              </p>
              <p>
                We comply with the UK General Data Protection Regulation (UK GDPR) and applicable UK data protection laws.
              </p>
            </div>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We collect the following categories of data:</p>

              <div className="space-y-2">
                <p><strong>a) Account Information</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email address</li>
                  <li>Account status (trial, active subscription, cancelled)</li>
                  <li>Login and authentication details</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>b) Receipt and Grocery Data</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Items, prices, quantities, and store details from uploaded or scanned receipts</li>
                  <li>User-reviewed or corrected receipt data</li>
                  <li>Users are advised not to upload payment card details or unnecessary personal information</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>c) Usage Data</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Number of receipt scans and recipe imports</li>
                  <li>Feature usage and preferences</li>
                  <li>App interactions required to operate the Service</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>d) Payment Information</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payments are processed securely by third-party providers (e.g. Stripe)</li>
                  <li>GroceryIntel does not store card or banking details</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>e) Anonymous Crowd Price Data</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Store name, item name, and price</li>
                  <li>Fully anonymised and not linked to individual users</li>
                  <li>Used solely for short-term price analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. How We Use Your Data */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Data</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We use personal data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operate receipt scanning, analytics, and budgeting features</li>
                <li>Provide insights into grocery spending, price changes, and trends</li>
                <li>Support meal planning, recipes, and nutritional summaries</li>
                <li>Manage subscriptions, trials, and payments</li>
                <li>Improve accuracy, reliability, and usability of the Service</li>
                <li>Communicate important service updates or support messages</li>
              </ul>
              <p>We do not sell, rent, or trade personal data.</p>
            </div>
          </div>

          {/* 4. Beta Status and Disclaimers */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">4. Beta Status and Disclaimers</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>GroceryIntel is an early-stage Beta product. During this phase:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Features may change or be refined</li>
                <li>Data accuracy may improve over time as systems evolve</li>
                <li>Insights are provided for informational purposes only and are not financial advice or guarantees</li>
              </ul>
              <p>By using the Service, you acknowledge and accept these conditions.</p>
            </div>
          </div>

          {/* 5. Data Sharing and Processors */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">5. Data Sharing and Processors</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>Your data may be processed by trusted third-party service providers, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Base44 – application hosting and core functionality</li>
                <li>Vercel – website hosting and deployment</li>
                <li>Stripe – secure payment processing</li>
              </ul>
              <p>All processors operate under appropriate data protection and confidentiality agreements.</p>
            </div>
          </div>

          {/* 6. International Data Transfers */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">6. International Data Transfers</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Some infrastructure providers (such as Base44) currently operate servers outside the UK, including in the United States.
              </p>
              <p>
                Where international transfers occur, we rely on approved UK GDPR safeguards such as Standard Contractual Clauses (SCCs) or equivalent mechanisms. This section will be updated if transfer arrangements change.
              </p>
            </div>
          </div>

          {/* 7. Data Retention */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">7. Data Retention</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We retain personal data only for as long as necessary to provide the Service and fulfil legitimate business purposes.</p>

              <div className="space-y-2">
                <p><strong>a) Active Accounts</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Identifiable user data is retained on a rolling 14-month basis while an account remains active</li>
                  <li>This supports year-on-year comparisons and meaningful long-term insights</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>b) Inactive Accounts</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>If an account becomes inactive, data is retained for up to 6 months after the last activity</li>
                  <li>During the first 3 months, we may contact users with re-engagement or reactivation invitations</li>
                  <li>After this period, data is deleted or anonymised, unless retention is required for legal or regulatory reasons</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>c) Trial Users</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trial users follow the same retention rules as inactive accounts</li>
                  <li>Trial data is not retained indefinitely if the account is not reactivated</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p><strong>d) Anonymous Crowd Price Data</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Retained for up to 10 days on a rolling basis</li>
                  <li>Fully anonymised and cannot be linked back to individuals</li>
                </ul>
              </div>

              <p>Users may request deletion of their data at any time.</p>
            </div>
          </div>

          {/* 8. Security */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">8. Security</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We apply appropriate technical and organisational measures to protect personal data, including encryption, secure storage, and access controls.</p>
              <p>However, no online service can be guaranteed to be completely secure. You use the Service at your own risk.</p>
            </div>
          </div>

          {/* 9. Your Rights */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">9. Your Rights</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent where applicable</li>
                <li>Object to or restrict certain processing activities</li>
              </ul>
              <p>
                You may exercise these rights via your account dashboard or by contacting <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a>.
              </p>
              <p>
                You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO) in the UK.
              </p>
            </div>
          </div>

          {/* 10. Children’s Privacy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">10. Children’s Privacy</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>GroceryIntel is not intended for children under the age of 16. We do not knowingly collect personal data from children.</p>
            </div>
          </div>

          {/* 11. Changes to This Policy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">11. Changes to This Policy</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We may update this Privacy Policy from time to time. If material changes are made, we will notify users via email or in-app notice.</p>
            </div>
          </div>

          {/* 12. Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">12. Contact</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>If you have any questions about this Privacy Policy or how your data is handled, please contact:</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a></li>
                <li><strong>In-app support:</strong> Available within the Service</li>
              </ul>
            </div>
          </div>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
};
export default PrivacyPage;
