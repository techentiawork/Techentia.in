import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, ContactUs, FAQ, Home, Portfolio, Services } from './Pages';
import { Footer, Navbar } from './components';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <Router>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} portfolioRef={portfolioRef} contactRef={contactRef} faqRef={faqRef} />
      <Home homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} portfolioRef={portfolioRef} contactRef={contactRef} faqRef={faqRef} />
      <Footer homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} portfolioRef={portfolioRef} contactRef={contactRef} faqRef={faqRef} />
    </Router>
  );
}

export default App;
