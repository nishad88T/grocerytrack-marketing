const GA_MEASUREMENT_ID = 'G-P88Y0BE6LS';

export const isAnalyticsReady = () =>
  typeof window !== 'undefined' && typeof window.gtag === 'function';

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

export const analytics = {
  measurementId: GA_MEASUREMENT_ID,
  trackPageView,
  trackEvent,
};
