import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

export default function App() {
  // Courtyard Ambiance Mode: 'night' (twilight fairy lights) or 'day' (daylight courtyard)
  const [courtyardMode, setCourtyardMode] = useState('night');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const toggleCourtyardMode = () => {
    setCourtyardMode((prev) => (prev === 'night' ? 'day' : 'night'));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0E100F] text-[#F7F4EC] selection:bg-[#D4AF37] selection:text-[#0E100F] relative flex flex-col justify-between">
        
        {/* Helper to scroll to top on page navigation */}
        <ScrollToTop />

        {/* Global Navigation with streamlined links and route awareness */}
        <Navbar
          courtyardMode={courtyardMode}
          toggleCourtyardMode={toggleCourtyardMode}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  courtyardMode={courtyardMode}
                  toggleCourtyardMode={toggleCourtyardMode}
                  onOpenReservation={() => setIsReservationOpen(true)}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <MenuPage
                  onOpenReservation={() => setIsReservationOpen(true)}
                />
              }
            />
          </Routes>
        </div>

        {/* Luxurious Dark Footer */}
        <Footer />

        {/* Table Reservation & Party Enquiry Modal */}
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
