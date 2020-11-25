import React from 'react';
import './App.css';
// import About from './pages/Home';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Hero></Hero>
      <Navbar></Navbar>
        <Router>
          <Switch>
            <Route path="/portfolio/home" component={InfoSection} exact/>
            <Route path="/portfolio/projects" component={Portfolio} exact/>
            <Route path="/portfolio/contact" component={Contact} exact/>
          </Switch>
        </Router>
      <Footer></Footer>
    </>
  );
};

export default App;
