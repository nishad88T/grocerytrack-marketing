import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/shared/Navigation';

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
              <p className="text-slate-600 text-sm mt-1">Last updated: 14 October 2025</p>
            </div>
          </div>
          <div className="text-slate-600 space-y-1">
            <p><strong>Operated by:</strong> GroceryIntel Ltd</p>
            <p><strong>Company No.:</strong> 16838153 (England and Wales)</p>
            <p><strong>Contact:</strong> <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a></p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 space-y-8">
          
          {/* Introduction */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                At GroceryIntel™, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our service.
              </p>
              <p>
                We are committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>
          </div>

          {/* What Data We Collect */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">What Data We Collect</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, password (encrypted), and subscription tier.</li>
                <li><strong>Receipt Data:</strong> Store names, purchase dates, item names, quantities, prices, and receipt images you upload.</li>
                <li><strong>Usage Data:</strong> How you interact with our app, including features used and preferences set.</li>
                <li><strong>Payment Information:</strong> Processed securely through Stripe (we do not store your full card details).</li>
                <li><strong>Household Data:</strong> If you use household sharing, we store information about household members and their permissions.</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Data */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">How We Use Your Data</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our grocery tracking and analytics services</li>
                <li>Process receipt scans and generate insights</li>
                <li>Manage your account and subscription</li>
                <li>Send you important service updates and notifications</li>
                <li>Provide customer support</li>
                <li>Analyze app usage to improve features and user experience</li>
                <li>Detect and prevent fraud or abuse</li>
              </ul>
              <p className="mt-4">
                <strong>We do not sell your data to third parties or use it for advertising purposes.</strong>
              </p>
            </div>
          </div>

          {/* Legal Basis for Processing */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Legal Basis for Processing</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We process your data under the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract:</strong> To fulfill our service agreement with you</li>
                <li><strong>Legitimate Interest:</strong> To improve our service and prevent fraud</li>
                <li><strong>Consent:</strong> Where you have explicitly agreed (e.g., marketing emails)</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Who We Share Data With</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We only share your data with trusted third parties who help us provide our service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hosting Providers:</strong> AWS (data storage), Vercel (app hosting)</li>
                <li><strong>Payment Processors:</strong> Stripe (for subscription payments)</li>
                <li><strong>Email Services:</strong> For sending transactional emails and notifications</li>
                <li><strong>Analytics Tools:</strong> To understand how users interact with our app (anonymized data only)</li>
              </ul>
              <p className="mt-4">
                All third-party providers are carefully vetted and bound by strict data protection agreements.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">How We Protect Your Data</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for data transmission (HTTPS/TLS)</li>
                <li>Encrypted data storage</li>
                <li>Secure authentication and password hashing</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and monitoring</li>
              </ul>
            </div>
          </div>

          {/* Data Retention */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">How Long We Keep Your Data</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                We retain your data for as long as your account is active and as necessary to provide our services. If you delete your account, we will delete your personal data within 30 days, except where we are required by law to retain certain information (e.g., for tax or accounting purposes).
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to certain types of processing</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline font-semibold">support@groceryintel.com</a>.
              </p>
            </div>
          </div>

          {/* Changes to This Policy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Changes to This Policy</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We will notify you of significant changes via email or in-app notification.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a></li>
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
export default PrivacyPage;
