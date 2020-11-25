import React from 'react';
import './App.css';
// import About from './pages/Home';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <Hero></Hero>
      <Navbar></Navbar>
        <HashRouter basename='/portfolio'>
          <Switch>
            <Route path="/portfolio" component={InfoSection} exact/>
            <Route path="/portfolio/projects" component={Portfolio} exact/>
            <Route path="/portfolio/contact" component={Contact} exact/>
          </Switch>
        </HashRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
