import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import FAQsPage from './pages/FAQsPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

// ScrollToTop component to ensure pages load at the top
function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Features" element={<FeaturesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/FAQs" element={<FAQsPage />} />
        <Route path="/TermsOfUse" element={<TermsOfUsePage />} />
        <Route path="/Privacy" element={<PrivacyPage />} />
        <Route path="/CookiePolicy" element={<CookiePolicyPage />} />
        {/* Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
