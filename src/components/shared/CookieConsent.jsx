import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import {
  getConsent,
  initAnalyticsConsent,
  grantAnalyticsConsent,
  denyAnalyticsConsent,
} from '@/lib/analytics';

/**
 * Cookie-consent banner. Google Analytics is only loaded after the user
 * accepts. The choice is remembered in localStorage and can be changed again
 * via the "Cookie settings" link in the footer (which dispatches the
 * `open-cookie-settings` event).
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Re-load analytics on startup only if consent was previously granted.
    initAnalyticsConsent();

    // Show the banner if the user hasn't made a choice yet.
    if (!getConsent()) setVisible(true);

    const openSettings = () => setVisible(true);
    window.addEventListener('open-cookie-settings', openSettings);
    return () => window.removeEventListener('open-cookie-settings', openSettings);
  }, []);

  const accept = () => {
    grantAnalyticsConsent();
    setVisible(false);
  };

  const reject = () => {
    denyAnalyticsConsent();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[1500] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tangerine-50">
            <Cookie className="h-5 w-5 text-tangerine-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-semibold text-slate-900">We value your privacy</h2>
            <p className="mt-1 text-sm text-slate-600">
              We use essential cookies to run the site and, with your consent, analytics
              cookies to understand how it's used so we can improve it. You can change your
              choice anytime via “Cookie settings” in the footer. See our{' '}
              <Link to="/CookiePolicy" className="text-tangerine-600 hover:underline font-medium">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={reject}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={accept}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-tangerine-500 hover:bg-tangerine-600 text-white font-semibold transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
