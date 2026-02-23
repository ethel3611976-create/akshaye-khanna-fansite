
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Appearances } from './pages/Appearances';
import { Filmography } from './pages/Filmography';
import { FanHub } from './pages/FanHub';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Interviews } from './pages/Interviews';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appearances" element={<Appearances />} />
          <Route path="/filmography" element={<Filmography />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/fan-hub" element={<FanHub />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
