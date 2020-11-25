import React from 'react';
import './App.css';
// import About from './pages/Home';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Hero></Hero>
    <Navbar></Navbar>
    <InfoSection></InfoSection>
    <Footer></Footer>
    </>
  );
};

export default App;
