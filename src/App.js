import React from 'react';
import './App.css';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Link } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Hero></Hero>
      <Navbar></Navbar>
        <HashRouter basename='/'>
            <Route path="/" component={InfoSection} exact/>
            <Route path="/projects" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </HashRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
