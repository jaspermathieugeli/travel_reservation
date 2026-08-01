import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Beaches from './components/Beaches';
import Search from './components/Search';
import Selects from './components/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beaches />
      <Search />
      <Selects />
    </div>
  );
}

export default App;
