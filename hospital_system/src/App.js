import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Footer from "../src/components/Footer/Footer";
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
  <div>
    <Navbar /> 
    <Carousel /> 
    <LandingPage />
    <Footer /> 
  </div>
  );
}

export default App;