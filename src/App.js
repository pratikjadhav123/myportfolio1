import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Navbar from './componants/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
         <Route index exact Component={Home} />
         <Route path='/about' exact Component={ About } />
         <Route path='/portfolio' exact Component={Portfolio } />
         <Route path='/contact' exact Component={ Contact } />
         </Routes>
      </Router>
    </>
  );
}

export default App;
