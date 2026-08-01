import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Beaches from './components/Beaches';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beaches />
      <Search />
    </div>
  );
}

export default App;
