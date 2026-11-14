import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import NewsPage from './components/NewsPage';
import GalleryPage from './components/GalleryPage';
import NotFound from './components/NotFound';
import AlQuranCompetition from './pages/AlQuranCompetition';

const LayoutWithNav = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    data: null,
  });

  const handleOpenModal = (type, data) => {
    setModalState({ isOpen: true, type, data });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: null, data: null });
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-light">
      <Navbar />
      <main id="main-content" className="flex-grow">
        {children({ onOpenModal: handleOpenModal })}
      </main>
      <Footer />
      <Modal
        isOpen={modalState.isOpen}
        type={modalState.type}
        data={modalState.data}
        onClose={handleCloseModal}
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
         <Route
          // path="/al-quran-competition"
          path="/"
          element={
            <LayoutWithNav>
              {() => <AlQuranCompetition />}
            </LayoutWithNav>
          }
        />
        <Route
          path="/home"
          element={<LayoutWithNav>{(props) => <Home {...props} />}</LayoutWithNav>}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={
            <LayoutWithNav>
              {() => <AboutPage onNavigate={() => {}} />}
            </LayoutWithNav>
          }
        />
        <Route
          path="/events"
          element={
            <LayoutWithNav>
              {(props) => <EventsPage {...props} />}
            </LayoutWithNav>
          }
        />
        <Route
          path="/news"
          element={
            <LayoutWithNav>
              {(props) => <NewsPage {...props} />}
            </LayoutWithNav>
          }
        />
        <Route
          path="/gallery"
          element={
            <LayoutWithNav>
              {() => <GalleryPage />}
            </LayoutWithNav>
          }
        />
        {/* <Route
          path="/al-quran-competition"
          element={
            <LayoutWithNav>
              {() => <AlQuranCompetition />}
            </LayoutWithNav>
          }
        /> */}

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <LayoutWithNav>
              {() => <NotFound />}
            </LayoutWithNav>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;