import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState('');
  const navigate = useNavigate();

  const handleOpenQuoteModal = (service = '') => {
    setPreSelectedService(service);
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceName) => {
    setPreSelectedService(serviceName);
    // Navigate to dedicated contact page with service pre-selected
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#070B10] text-white selection:bg-ztg-blue/30 selection:text-white flex flex-col font-sans">
      {/* Scroll to Top on page transition */}
      <ScrollToTop />

      {/* Sticky Multi-Page Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal('')} />

      {/* Main Multi-Page Route Outlet */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectServiceForQuote={handleSelectServiceForQuote}
                preSelectedService={preSelectedService}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectServiceForQuote={handleSelectServiceForQuote}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/industries"
            element={
              <IndustriesPage
                onSelectServiceForQuote={handleSelectServiceForQuote}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/projects"
            element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/insights"
            element={<InsightsPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/contact"
            element={<ContactPage preSelectedService={preSelectedService} />}
          />
          {/* Catch-all fallback redirect to home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectServiceForQuote={handleSelectServiceForQuote}
                preSelectedService={preSelectedService}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Multi-Column Footer */}
      <Footer />

      {/* Quick Quote / Consultation Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={preSelectedService}
      />
    </div>
  );
}
