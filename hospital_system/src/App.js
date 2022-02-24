import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import LandingPage from '../src/components/LandingPage/LandingPage';
import Navbar from '../src/components/navbar/Navbar';

function App() {
  return (
  <div>
     <Navbar/>
      <Carousel />
      <LandingPage/>
  </div>
  );
}

export default App;
