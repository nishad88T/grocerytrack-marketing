import React from 'react';
import {
  Shield,
  Eye,
  FileText,
  Sparkles,
  Users,
  AlertTriangle,
  Share2,
  Globe,
  Clock,
  BarChart3,
  Bug,
  Lock,
  Baby,
  Mail,
} from 'lucide-react';
import Navigation from '@/components/shared/Navigation';
import LegalFooter from '@/components/shared/LegalFooter';

const Section = ({ icon: Icon, title, children }) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    </div>
    <div className="text-slate-700 leading-relaxed space-y-4">{children}</div>
  </div>
);

const Callout = ({ children, variant = 'info' }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-slate-700',
    warn: 'bg-amber-50 border-amber-400 text-slate-800',
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 ${styles[variant]}`}>
      {children}
    </div>
  );
};

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
              <p className="text-slate-600 text-sm mt-1">Last updated: 7 June 2026</p>
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
          <Section icon={Shield} title="1. Overview">
            <p>
              This Privacy Policy explains how GroceryIntel (“we”, “our”, or “us”) collects, uses, stores, and protects personal data when you use our application, website, and related services (the “Service”).
            </p>
            <p>
              GroceryIntel is continuously improving. Features, data processing methods, and insights may evolve as we develop and refine the product.
            </p>
            <p>
              We comply with the UK General Data Protection Regulation (UK GDPR) and applicable UK data protection laws.
            </p>
          </Section>

          {/* 2. Information We Collect */}
          <Section icon={Eye} title="2. Information We Collect">
            <p>We collect the following categories of personal data:</p>

            <div className="space-y-2">
              <p><strong>a) Account Information</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email address</li>
                <li>Full name (optional, if provided)</li>
                <li>Account status (trial, active subscription, cancelled)</li>
                <li>Login and authentication details</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p><strong>b) Receipt and Grocery Data</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Items, prices, quantities, and store details from uploaded or scanned receipts</li>
                <li>Receipt images uploaded by you for scanning</li>
                <li>User-reviewed or corrected receipt data</li>
                <li>Spending summaries and historical grocery data</li>
              </ul>
              <Callout variant="warn">
                <p className="m-0"><strong>Important:</strong> Users are advised not to upload payment card details or other unnecessary personal information. Receipt images are processed and stored to enable the scanning and analysis features of the Service.</p>
              </Callout>
            </div>

            <div className="space-y-2">
              <p><strong>c) Household Data</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Household membership details</li>
                <li>Shared receipts, meal plans, budgets, and recipes created by any household member</li>
                <li>Household invitation records (including email addresses used for invitations)</li>
              </ul>
              <p>For full details of how household data is shared, see <strong>Section 5: Household Sharing</strong>.</p>
            </div>

            <div className="space-y-2">
              <p><strong>d) Usage Data</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Number of receipt scans, recipe imports, and other feature interactions</li>
                <li>Feature usage and interaction patterns required to operate and improve the Service</li>
                <li>Device type and operating system version</li>
                <li>Approximate location derived from IP address (country and region level only — we do not collect precise location)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p><strong>e) Payment Information</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payments are processed securely by our payment service provider</li>
                <li>GroceryIntel does not store card or banking details directly</li>
                <li>Your email address and account status are shared with our payment provider to manage your subscription and billing</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p><strong>f) Anonymous Crowd Price Data</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Store name, item name, and price</li>
                <li>Fully anonymised and not linked to individual users</li>
                <li>Used solely for short-term price comparison analysis</li>
              </ul>
            </div>
          </Section>

          {/* 3. How We Use Your Data */}
          <Section icon={FileText} title="3. How We Use Your Data">
            <p>We use personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate receipt scanning, analytics, and budgeting features</li>
              <li>Provide AI-powered categorisation of grocery items and spending insights</li>
              <li>Support meal planning and recipe management</li>
              <li>Enable household sharing features where you choose to use them</li>
              <li>Manage subscriptions, trials, and payments</li>
              <li>Improve the accuracy, reliability, and usability of the Service</li>
              <li>Monitor for errors and technical issues to maintain service quality</li>
              <li>Understand how features are used in aggregate to improve the product</li>
              <li>Communicate important service updates or support messages</li>
            </ul>
            <p><strong>We do not sell, rent, or trade personal data.</strong></p>
            <Callout variant="info">
              <p className="m-0"><strong>Legal basis for processing:</strong> The primary legal basis for processing your receipt, account, and spending data is the performance of our contract with you (UK GDPR Article 6(1)(b)) — this processing is necessary to deliver the features of the Service you have signed up for. Where we process data to improve and operate the Service more broadly (such as analytics and error monitoring), we rely on our legitimate interests (UK GDPR Article 6(1)(f)), balanced against your rights and interests.</p>
            </Callout>
          </Section>

          {/* 4. AI-Powered Features */}
          <Section icon={Sparkles} title="4. AI-Powered Features">
            <p>
              GroceryIntel uses artificial intelligence and machine learning to power core features of the Service, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Receipt scanning and categorisation:</strong> Your receipt images are processed using automated document recognition. The extracted item data is then processed by AI services to categorise items, normalise names, and identify brands and quantities.</li>
              <li><strong>Spending insights and recommendations:</strong> Aggregated receipt data from your account is processed by AI services to generate personalised spending summaries, trends, and recommendations.</li>
              <li><strong>Recipe suggestions:</strong> Your purchase history and meal preferences may be used to generate relevant recipe suggestions.</li>
            </ul>
            <p>
              When AI services process your data, those requests may be logged by our infrastructure for operational purposes such as debugging, performance monitoring, and cost tracking. These logs are associated with your account identifier and are retained for a limited period as described in Section 8.
            </p>
            <p>
              We do not use your personal data to train third-party AI models. Our AI service providers are contractually required to handle your data in accordance with data protection terms consistent with UK GDPR.
            </p>
          </Section>

          {/* 5. Household Sharing */}
          <Section icon={Users} title="5. Household Sharing">
            <p>
              GroceryIntel includes an optional household feature that allows multiple users to share a single account space for joint grocery tracking and planning.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6">What is shared in a household</h3>
            <p>
              When you create or join a household, <strong>all of the following data becomes visible to every member of that household:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All receipts (including those scanned before joining the household)</li>
              <li>All receipt items and spending history</li>
              <li>All meal plans</li>
              <li>All saved and imported recipes</li>
              <li>All budgets and spending summaries</li>
              <li>All spending analytics and insights</li>
            </ul>
            <p>
              There is <strong>no per-item privacy setting.</strong> You cannot mark individual receipts, meal plans, or recipes as private while remaining in a shared household. The only way to keep data private is to not join or invite others to a household.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6">Household membership limits</h3>
            <p>
              Households are limited to a maximum of <strong>4 members</strong>, including the account owner.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6">Creating a household</h3>
            <p>
              When you create a household, you will be asked to explicitly confirm that you understand and accept the data sharing terms described above. Proceeding with household creation constitutes your agreement to share your account data with the members you invite.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6">Important disclaimer</h3>
            <Callout variant="warn">
              <p className="m-0 font-semibold">Once you create a household, all your data is shared with every member and this cannot be undone.</p>
            </Callout>
            <Callout variant="warn">
              <p className="m-0"><strong>Household actions are currently irreversible.</strong> There is no facility to undo household creation, separate individual accounts after sharing has occurred, or reverse the sharing of data that has already taken place within a household. If you wish to stop sharing data with household members, the only current option is to leave or dissolve the household. We strongly recommend careful consideration before creating a household or accepting a household invitation.</p>
            </Callout>

            <h3 className="text-xl font-semibold text-slate-900 mt-6">Changes to household features</h3>
            <p>
              We are developing additional controls and safeguards for household data in a future update, including improved account separation. This policy will be updated when those features are available.
            </p>
          </Section>

          {/* 6. Data Sharing and Third-Party Processors */}
          <Section icon={Share2} title="6. Data Sharing and Third-Party Processors">
            <p>
              Your data may be processed by trusted third-party service providers in order to deliver the features of GroceryIntel. These providers act as data processors on our behalf under appropriate contractual and data protection terms.
            </p>
            <p>We use service providers in the following categories:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-4 font-semibold text-slate-900">Category</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Infrastructure and hosting</td><td className="py-3 px-4 text-slate-700">Hosting our application, database, and user authentication services</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Receipt image storage</td><td className="py-3 px-4 text-slate-700">Secure cloud storage of uploaded receipt images</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Document processing</td><td className="py-3 px-4 text-slate-700">Automated extraction of text and structured data from receipt images</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">AI and machine learning</td><td className="py-3 px-4 text-slate-700">Categorisation of grocery items, generation of insights, and recipe recommendations</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Payment processing</td><td className="py-3 px-4 text-slate-700">Subscription management and secure billing</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Email communications</td><td className="py-3 px-4 text-slate-700">Delivery of account, service, and subscription-related emails</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Analytics</td><td className="py-3 px-4 text-slate-700">Understanding how the app is used in aggregate to guide product improvement</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-slate-800">Error monitoring</td><td className="py-3 px-4 text-slate-700">Detecting and diagnosing technical errors to maintain service quality</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              All processors are required to implement appropriate technical and organisational security measures. We only engage processors where we are satisfied that they provide adequate protection for personal data.
            </p>
            <p>
              We do not share your personal data with third parties for their own advertising, marketing, or sale purposes.
            </p>
          </Section>

          {/* 7. International Data Transfers */}
          <Section icon={Globe} title="7. International Data Transfers">
            <p>
              Some of our service providers may process personal data outside the United Kingdom. Where international transfers occur, we ensure that appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved under UK GDPR</li>
              <li>The UK International Data Transfer Agreement (IDTA) or the UK Addendum to EU Standard Contractual Clauses</li>
              <li>Transfers to countries recognised as providing adequate data protection under UK law</li>
            </ul>
            <p>This section will be updated if our transfer arrangements change materially.</p>
          </Section>

          {/* 8. Data Retention */}
          <Section icon={Clock} title="8. Data Retention">
            <p>We retain personal data only for as long as necessary to provide the Service and fulfil legitimate business purposes.</p>

            <div className="space-y-2">
              <p><strong>a) Active Accounts</strong></p>
              <p>Personal data associated with an active account is retained on a <strong>rolling 14-month basis</strong> from the most recent activity. This supports year-on-year comparisons and meaningful long-term spending insights.</p>
            </div>

            <div className="space-y-2">
              <p><strong>b) Trial Users</strong></p>
              <p>If a trial account is not converted to a paid subscription, data is retained for <strong>3 months from the date of last activity.</strong> During this period, we may contact you with information about reactivating your account. After 3 months of inactivity, the account and all associated personal data are permanently deleted.</p>
            </div>

            <div className="space-y-2">
              <p><strong>c) Inactive Accounts</strong></p>
              <p>If a paid or previously active account becomes inactive (no login or usage activity), data is retained for <strong>3 months from the date of last activity.</strong> During this period, we may attempt to contact you to offer reactivation options. After 3 months, personal data is permanently deleted unless retention is required for legal or regulatory reasons.</p>
            </div>

            <div className="space-y-2">
              <p><strong>d) Account Deletion</strong></p>
              <p>When you request deletion of your account:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your data is removed from our systems, including receipt images, receipts, meal plans, recipes, budgets, and account records</li>
                <li>You are removed from any household you belong to, and any household you own is dissolved</li>
                <li>Deletion of your authentication record is irreversible</li>
              </ul>
              <p><strong>Current behaviour:</strong> Account deletion is currently processed immediately upon request. No grace period is in place.</p>
              <p><strong>Planned future behaviour:</strong> We intend to introduce a 30-day grace period before permanent deletion, during which your account will be deactivated but recoverable if you change your mind. Once the 30-day period expires, deletion will be permanent and irreversible, and no data will be recoverable. This policy will be updated before that change is implemented.</p>
            </div>

            <div className="space-y-2">
              <p><strong>e) Anonymous Crowd Price Data</strong></p>
              <p>Anonymous price data is retained for up to <strong>10 days</strong> on a rolling basis. It cannot be linked back to individual users.</p>
            </div>

            <div className="space-y-2">
              <p><strong>f) Error and Operational Logs</strong></p>
              <p>Technical error logs and AI processing logs are retained for up to <strong>30 days</strong> for operational and debugging purposes. These logs are anonymised or minimised where possible.</p>
            </div>
          </Section>

          {/* 9. Analytics and Usage Tracking */}
          <Section icon={BarChart3} title="9. Analytics and Usage Tracking">
            <p>
              We use an analytics service to understand how users interact with GroceryIntel at an aggregate level. This helps us identify which features are most valuable, detect problems, and improve the overall experience.
            </p>
            <p>The analytics service may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Feature usage events, such as completing a receipt scan, generating a shopping list, or importing a recipe</li>
              <li>App session information, such as when the app was opened or closed</li>
              <li>Device type and operating system version</li>
              <li>Approximate location derived from your IP address (country and region level only)</li>
            </ul>
            <p>
              We do not collect precise geographic coordinates for analytics purposes. We do not use analytics data to build individual behavioural profiles for advertising or to share data with advertising networks.
            </p>
            <p>
              On our website, analytics cookies are only set after you provide consent through our cookie banner. You can change your choice at any time via the “Cookie settings” link in the website footer. See our <a href="/CookiePolicy" className="text-blue-600 hover:underline">Cookie Policy</a> for details.
            </p>
            <p>
              You can request that your analytics data be deleted by contacting us at <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a>.
            </p>
            <p>The legal basis for this processing is your <strong>consent</strong> (for website analytics cookies) and our <strong>legitimate interests</strong> in operating and improving the Service.</p>
          </Section>

          {/* 10. Error Monitoring */}
          <Section icon={Bug} title="10. Error Monitoring">
            <p>We use error monitoring services to detect and diagnose technical problems in the Service. These services capture information such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Error messages and diagnostic stack traces</li>
              <li>App version and device type</li>
              <li>The context in which an error occurred</li>
            </ul>
            <p>
              Error monitoring currently operates at the backend service level. We intend to extend this to the app frontend in a future update to improve visibility of mobile-side issues. Error data is not used to identify you personally and is retained for a limited period as described in Section 8.
            </p>
            <p>The legal basis for this processing is our <strong>legitimate interests</strong> in maintaining the technical reliability of the Service.</p>
          </Section>

          {/* 11. Security */}
          <Section icon={Lock} title="11. Security">
            <p>We apply appropriate technical and organisational measures to protect personal data, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and role-based permissions</li>
              <li>Row-level security controls on our database</li>
              <li>Secure image storage with time-limited access credentials</li>
            </ul>
            <p>No online service can be guaranteed to be completely secure. You use the Service at your own risk, and we encourage you to use a strong, unique password for your GroceryIntel account.</p>
          </Section>

          {/* 12. Your Rights */}
          <Section icon={Shield} title="12. Your Rights">
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access</strong> your personal data</li>
              <li><strong>Request correction</strong> of inaccurate data</li>
              <li><strong>Request deletion</strong> of your data (the right to erasure)</li>
              <li><strong>Data portability</strong> — request a copy of your data in a machine-readable format</li>
              <li><strong>Withdraw consent</strong> where processing is based on your consent</li>
              <li><strong>Object to or restrict</strong> certain processing activities</li>
            </ul>
            <p>
              You may exercise these rights via your account dashboard or by contacting us at <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline font-semibold">support@groceryintel.com</a>.
            </p>
            <p>
              You also have the right to lodge a complaint with the <strong>Information Commissioner’s Office (ICO):</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ico.org.uk</a>
            </p>
            <Callout variant="info">
              <p className="m-0"><strong>Note on data portability:</strong> A formal in-app data export feature is planned for a future update. In the meantime, you may contact us directly to request a copy of your data.</p>
            </Callout>
          </Section>

          {/* 13. Ongoing Development and Disclaimers */}
          <Section icon={AlertTriangle} title="13. Ongoing Development and Disclaimers">
            <p>GroceryIntel is continuously improving. As we develop the product:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Features may change or be refined without prior notice</li>
              <li>Data accuracy may improve over time as systems evolve</li>
              <li>Insights are provided for informational purposes only and are not financial advice or guarantees</li>
              <li>Some features referenced in this policy, including certain household controls, data export, and account deletion grace periods, are planned for future updates</li>
            </ul>
            <p>By using the Service, you acknowledge and accept these conditions.</p>
          </Section>

          {/* 14. Children’s Privacy */}
          <Section icon={Baby} title="14. Children’s Privacy">
            <p><strong>GroceryIntel is not intended for children under the age of 13.</strong> We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it promptly.</p>
          </Section>

          {/* 15. Changes to This Policy */}
          <Section icon={FileText} title="15. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. If material changes are made, we will notify users via email or in-app notice. The date at the top of this document reflects when it was last updated.</p>
          </Section>

          {/* 16. Contact */}
          <Section icon={Mail} title="16. Contact">
            <p>If you have any questions about this Privacy Policy or how your data is handled, please contact:</p>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> <a href="mailto:support@groceryintel.com" className="text-blue-600 hover:underline">support@groceryintel.com</a></li>
              <li><strong>In-app support:</strong> Available within the Service</li>
              <li><strong>Registered Office:</strong> 128 City Road, London, EC1V 2NX, United Kingdom</li>
              <li><strong>ICO Registration:</strong> ZC066318</li>
            </ul>
          </Section>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
};

export default PrivacyPage;
