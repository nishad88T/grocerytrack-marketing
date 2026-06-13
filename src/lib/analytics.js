const GA_MEASUREMENT_ID = 'G-P88Y0BE6LS';
const CONSENT_KEY = 'gi-cookie-consent';
let hasTrackedSignUp = false;
let analyticsLoaded = false;

export const isAnalyticsReady = () =>
  typeof window !== 'undefined' && typeof window.gtag === 'function';

/** Read the stored cookie-consent choice: 'granted' | 'denied' | null. */
export const getConsent = () => {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};

const setConsent = (value) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore storage errors */
  }
};

/** Dynamically inject and initialise Google Analytics. Idempotent. */
export const loadAnalytics = () => {
  if (typeof window === 'undefined' || analyticsLoaded) return;
  analyticsLoaded = true;

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false, anonymize_ip: true });

  // Record the current page once GA is initialised (route changes are tracked
  // by AnalyticsTracker, which only fires on navigation).
  trackPageView(
    `${window.location.pathname}${window.location.search}${window.location.hash}`
  );
};

/** Load GA on startup only if the user previously granted consent. */
export const initAnalyticsConsent = () => {
  if (getConsent() === 'granted') loadAnalytics();
};

/** User accepted analytics cookies. */
export const grantAnalyticsConsent = () => {
  setConsent('granted');
  loadAnalytics();
};

/** User declined analytics cookies. */
export const denyAnalyticsConsent = () => {
  setConsent('denied');
  if (typeof window !== 'undefined') {
    // Belt-and-braces: hard-disable GA for the rest of the session.
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  }
};

export const trackPageView = (path) => {
  if (!isAnalyticsReady()) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackEvent = (name, params = {}) => {
  if (!isAnalyticsReady()) return;

  window.gtag('event', name, params);
};

export const trackSignUp = (method) => {
  if (hasTrackedSignUp || !method) return;

  trackEvent('sign_up', { method });
  hasTrackedSignUp = true;
};

export const resetSignUpTracking = () => {
  hasTrackedSignUp = false;
};

export const analytics = {
  measurementId: GA_MEASUREMENT_ID,
  trackPageView,
  trackEvent,
  trackSignUp,
};
