import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
  <div>
     <Navbar /> 
      <Carousel /> 
      <Footer />
  </div>
  );
}

export default App;