import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0E100F] text-[#F7F4EC] selection:bg-[#D4AF37] selection:text-[#0E100F] relative flex flex-col justify-between">
        
        {/* Helper to scroll to top on page navigation */}
        <ScrollToTop />

        {/* Global Navigation with streamlined links and route awareness */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/menu"
              element={<MenuPage />}
            />
          </Routes>
        </div>

        {/* Luxurious Dark Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
