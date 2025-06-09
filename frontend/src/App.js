import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WebsitesPage from './pages/WebsitesPage';
import SalesFunnelsPage from './pages/SalesFunnelsPage';
import MetaAdsPage from './pages/MetaAdsPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import DesignPage from './pages/DesignPage';
import VideoProcessingPage from './pages/VideoProcessingPage';
import ContentMarketingPage from './pages/ContentMarketingPage';
import SEOPage from './pages/SEOPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import SpecialOfferPage from './pages/SpecialOfferPage';
import RequestProjectPage from './pages/RequestProjectPage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/websites" element={<WebsitesPage />} />
          <Route path="/services/sales-funnels" element={<SalesFunnelsPage />} />
          <Route path="/services/meta-ads" element={<MetaAdsPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="/services/design" element={<DesignPage />} />
          <Route path="/services/video-processing" element={<VideoProcessingPage />} />
          <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/special-offer" element={<SpecialOfferPage />} />
          <Route path="/request-project" element={<RequestProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;