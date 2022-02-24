import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import LandingPage from '../src/components/LandingPage/LandingPage';
import Navbar from '../src/components/navbar/Navbar';
import Footer from "../src/components/Footer/Footer";


function App() {
  return (
  <div>
     <Navbar/>
      <Carousel />
      <LandingPage/>
    
    <Footer /> 
  </div>
  );
}

export default App;