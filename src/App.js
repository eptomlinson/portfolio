import React from 'react';
import './App.css';
// import About from './pages/Home';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Hero></Hero>
    <Navbar></Navbar>
    <InfoSection></InfoSection>
    </>
  );
};

export default App;
