import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Beaches from './components/Beaches';
import Search from './components/Search';
import Selects from './components/Selects';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beaches />
      <Search />
      <Selects />
      <Carousel />
    </div>
  );
}

export default App;
